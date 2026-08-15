# 三方史料共振报告

> 生成：`tools/resonance.py` · 公式 `resonance = (coverage/3) × (1−divergence) × (1−gap_rate)`
> 立场（明方 / 清方 / 朝鲜 / 综述考订）按来源 `source.party` 派生，
> 不手动贴标签——这是本项目与所有历史可视化产品的分界线。

> v0.4 起本报告自动扫描 `data/*/assertions.jsonl`，新切片落盘即入表。
> v0.17 起新增「明内部派系细分」：明朝内各利益集团（东林/阉党/浙党/盐商/内臣/封疆）
> 会因自身利害润色夸张记载，立场派生在 `party`（宏观桶）之外再按 `faction`（派系）二次拆分。

## 切片汇总

| 切片 | 断言 | 事件 | 平均共振 | 最高共振事件 | 四层分布 |
|---|---|---|---|---|---|
| baijia | 2 | 2 | **0.000** | event:bj_350（0.000） | scholarship 2 |
| beijing | 3 | 3 | **0.000** | event:bj_jz（0.000） | scholarship 3 |
| beijiu | 2 | 2 | **0.000** | event:bj_961（0.000） | scholarship 2 |
| bencao | 2 | 2 | **0.000** | event:bc_1281（0.000） | scholarship 2 |
| boju | 3 | 3 | **0.000** | event:bj_bj（0.000） | scholarship 3 |
| caishiji | 3 | 3 | **0.000** | event:cs_jin（0.000） | scholarship 3 |
| canhebei | 3 | 3 | **0.000** | event:ch_jz（0.000） | scholarship 3 |
| changping | 3 | 3 | **0.000** | event:cp_jz（0.000） | scholarship 3 |
| chanyuan | 2 | 2 | **0.000** | event:cy_1004（0.000） | scholarship 2 |
| chengpu | 3 | 3 | **0.000** | event:cp_chu（0.000） | scholarship 3 |
| chenqiao | 2 | 2 | **0.000** | event:cq_960a（0.000） | scholarship 2 |
| chensheng | 2 | 2 | **0.000** | event:cs_209a（0.000） | scholarship 2 |
| chibi | 3 | 3 | **0.000** | event:cb_cao（0.000） | scholarship 3 |
| diaoyucheng | 3 | 3 | **0.000** | event:dy_jz（0.000） | scholarship 3 |
| dingwu | 3 | 3 | **0.000** | event:dw_1876（0.000） | scholarship 3 |
| dong_han_yi | 3 | 3 | **0.000** | event:dy_196（0.000） | scholarship 3 |
| dujiangyan | 3 | 3 | **0.000** | event:dj_168（0.000） | scholarship 3 |
| dunzun | 2 | 2 | **0.000** | event:dz_134（0.000） | scholarship 2 |
| feishui | 3 | 3 | **0.000** | event:fs_jin（0.000） | scholarship 3 |
| fenshu | 2 | 2 | **0.000** | event:fs_212（0.000） | scholarship 2 |
| fotao | 2 | 2 | **0.000** | event:ft_67（0.000） | scholarship 2 |
| four_inv | 4 | 4 | **0.000** | event:fi_compass（0.000） | scholarship 4 |
| fushun | 20 | 3 | **0.415** | event:fushun_fall（0.580） | gap 2 / record 17 / scholarship 1 |
| fuzhou | 6 | 2 | **0.333** | event:fuzhou_fall（0.333） | gap 2 / record 3 / scholarship 1 |
| gaixia | 3 | 3 | **0.000** | event:gx_ge（0.000） | scholarship 3 |
| gaizhou | 6 | 2 | **0.389** | event:gaizhou_fall（0.444） | gap 2 / record 3 / scholarship 1 |
| grand_canal | 3 | 3 | **0.000** | event:gc_ming（0.000） | scholarship 3 |
| great_wall | 3 | 3 | **0.000** | event:gw_han（0.000） | scholarship 3 |
| guandu | 3 | 3 | **0.000** | event:gd_jz（0.000） | scholarship 3 |
| guangning | 43 | 3 | **0.484** | event:guangning_fall（0.785） | gap 3 / record 39 / scholarship 1 |
| guiling | 3 | 3 | **0.000** | event:gl_jz（0.000） | scholarship 3 |
| haizhou | 7 | 3 | **0.472** | event:haizhou_fall（0.750） | gap 2 / record 4 / scholarship 1 |
| heshangyuan | 3 | 3 | **0.000** | event:hs_jin（0.000） | scholarship 3 |
| hongjin | 2 | 2 | **0.000** | event:hj_1351（0.000） | scholarship 2 |
| huangchao | 2 | 2 | **0.000** | event:hc_875（0.000） | scholarship 2 |
| huanghe | 6 | 6 | **0.000** | event:hh_1128（0.000） | scholarship 6 |
| huangjin | 3 | 3 | **0.000** | event:hj_184（0.000） | scholarship 3 |
| huaxian | 3 | 3 | **0.000** | event:hx_after（0.000） | scholarship 3 |
| hulao | 3 | 3 | **0.000** | event:hl_jz（0.000） | scholarship 3 |
| humen | 3 | 3 | **0.000** | event:hm_guan（0.000） | scholarship 3 |
| imjin | 19 | 5 | **0.467** | event:cefeng_heyi（0.667） | gap 2 / inference 2 / record 14 / scholarship 1 |
| jianzhen | 2 | 2 | **0.000** | event:jz_743（0.000） | scholarship 2 |
| jiasixie | 2 | 2 | **0.000** | event:js_533（0.000） | scholarship 2 |
| jingnan | 2 | 2 | **0.000** | event:jn_1399（0.000） | scholarship 2 |
| jinzhou | 15 | 2 | **0.628** | event:jinzhou_songjin（0.923） | gap 2 / record 12 / scholarship 1 |
| jinzhouwei | 6 | 3 | **0.278** | event:jinzhouwei_fall（0.333） | gap 2 / record 3 / scholarship 1 |
| jiupin | 2 | 2 | **0.000** | event:jp_220（0.000） | scholarship 2 |
| jiuzi | 2 | 2 | **0.000** | event:jz_1712（0.000） | scholarship 2 |
| julu | 3 | 3 | **0.000** | event:jl_jz（0.000） | scholarship 3 |
| 开原 | 44 | 3 | **0.495** | 开铁之战（开原陷落）（0.818） | gap 2 / inference 8 / record 29 / scholarship 5 |
| keju | 3 | 3 | **0.000** | event:kj_1905（0.000） | scholarship 3 |
| kunyang | 3 | 3 | **0.000** | event:ky_jz（0.000） | scholarship 3 |
| liangshui | 2 | 2 | **0.000** | event:ls_780（0.000） | scholarship 2 |
| 辽阳 | 65 | 2 | **0.426** | 辽阳陷落（1621）（0.520） | gap 3 / inference 1 / record 51 / scholarship 10 |
| lingqu | 2 | 2 | **0.000** | event:lq_214（0.000） | scholarship 2 |
| little_ice | 5 | 5 | **0.000** | event:li_1580（0.000） | scholarship 5 |
| lixue | 2 | 2 | **0.000** | event:lx_1175（0.000） | scholarship 2 |
| lizicheng | 4 | 4 | **0.000** | event:lc_1628（0.000） | scholarship 4 |
| locust | 5 | 5 | **0.000** | event:lc_1073（0.000） | scholarship 5 |
| lvlin | 2 | 2 | **0.000** | event:ll_17（0.000） | scholarship 2 |
| maling | 3 | 3 | **0.000** | event:ml_jz（0.000） | scholarship 3 |
| ming_fall | 3 | 3 | **0.000** | event:mf_1627（0.000） | scholarship 3 |
| mobai | 3 | 3 | **0.000** | event:mb_chu（0.000） | scholarship 3 |
| ningyuan | 43 | 4 | **0.390** | event:ningjin_dajie（0.667） | gap 2 / record 40 / scholarship 1 |
| poyanghu | 3 | 3 | **0.000** | event:py_chen（0.000） | scholarship 3 |
| qin_mie_liu_guo | 14 | 5 | **0.000** | event:ev_qin_mie_liu_guo_01（0.000） | gap 2 / record 11 / scholarship 1 |
| qin_unify | 6 | 6 | **0.000** | event:qn_221（0.000） | scholarship 6 |
| qing_han | 3 | 3 | **0.000** | event:qh_1644（0.000） | scholarship 3 |
| 萨尔浒 | 123 | 5 | **0.556** | 阿布达里岗（东路·刘綎）（0.667） | gap 7 / inference 6 / record 98 / scholarship 12 |
| shangyang | 3 | 3 | **0.000** | event:sy_338（0.000） | scholarship 3 |
| shaqiu | 2 | 2 | **0.000** | event:sq_210（0.000） | scholarship 2 |
| shenkuo | 2 | 2 | **0.000** | event:sk_1072（0.000） | scholarship 2 |
| shenyang | 62 | 6 | **0.387** | event:shenyang_relief（0.825） | gap 4 / inference 1 / record 55 / scholarship 2 |
| song_he_jue | 3 | 3 | **0.000** | event:hj_1019（0.000） | scholarship 3 |
| sui_daxing | 2 | 2 | **0.000** | event:dx_582（0.000） | scholarship 2 |
| sui_mie_chen | 2 | 2 | **0.000** | event:sm_587（0.000） | scholarship 2 |
| suiyang | 3 | 3 | **0.000** | event:sy_jz（0.000） | scholarship 3 |
| taiping | 3 | 3 | **0.000** | event:tp_1851（0.000） | scholarship 3 |
| talas | 3 | 3 | **0.000** | event:tl_gel（0.000） | scholarship 3 |
| tang_huai_xi | 12 | 3 | **0.000** | event:huai_xi_jufa（0.000） | gap 1 / inference 1 / record 9 / scholarship 1 |
| three_campaigns | 14 | 3 | **0.000** | event:ev_three_campaigns_01（0.000） | gap 1 / inference 1 / record 11 / scholarship 1 |
| tianjing | 3 | 3 | **0.000** | event:tj_di（0.000） | scholarship 3 |
| 铁岭 | 31 | 2 | **0.173** | 铁岭陷落（1619）（0.179） | gap 2 / record 23 / scholarship 6 |
| tumu | 3 | 3 | **0.000** | event:tm_jz（0.000） | scholarship 3 |
| wanganshi | 3 | 3 | **0.000** | event:wa_1069（0.000） | scholarship 3 |
| wangmang | 3 | 3 | **0.000** | event:wm_9（0.000） | scholarship 3 |
| wencheng | 2 | 2 | **0.000** | event:wc_641（0.000） | scholarship 2 |
| wugu | 2 | 2 | **0.000** | event:wg_91（0.000） | scholarship 2 |
| wuwang | 2 | 2 | **0.000** | event:ww_1046（0.000） | scholarship 2 |
| wuxu | 2 | 2 | **0.000** | event:wx_0611（0.000） | scholarship 2 |
| xiaowen | 3 | 3 | **0.000** | event:xw_493（0.000） | scholarship 3 |
| xiaoyaojin | 3 | 3 | **0.000** | event:xy_cao（0.000） | scholarship 3 |
| xinhai | 3 | 3 | **0.000** | event:xh_1010（0.000） | scholarship 3 |
| xuanwu | 2 | 2 | **0.000** | event:xx_626（0.000） | scholarship 2 |
| xuanzang | 2 | 2 | **0.000** | event:xz_629（0.000） | scholarship 2 |
| yaksa | 3 | 3 | **0.000** | event:yk_e（0.000） | scholarship 3 |
| yancheng | 3 | 3 | **0.000** | event:yc_jz（0.000） | scholarship 3 |
| yaoshan | 3 | 3 | **0.000** | event:ys_jz（0.000） | scholarship 3 |
| yashan | 2 | 2 | **0.000** | event:ys_1276（0.000） | scholarship 2 |
| yehe | 7 | 3 | **0.278** | event:yehe_fall（0.333） | gap 2 / record 4 / scholarship 1 |
| yellow_sea_1894 | 15 | 1 | **0.000** | event:ev_yellow_sea_1894_02（0.000） | gap 1 / record 13 / scholarship 1 |
| yiling | 3 | 3 | **0.000** | event:yl_jz（0.000） | scholarship 3 |
| yuan_duo | 2 | 2 | **0.000** | event:yu_1271（0.000） | scholarship 2 |
| zhangheng | 2 | 2 | **0.000** | event:zh_132（0.000） | scholarship 2 |
| zhangjuzheng | 2 | 2 | **0.000** | event:zj_1573（0.000） | scholarship 2 |
| zhangqian | 2 | 2 | **0.000** | event:zq_126（0.000） | scholarship 2 |
| zhaofen | 2 | 2 | **0.000** | event:zf_33（0.000） | scholarship 2 |
| zhaowulian | 2 | 2 | **0.000** | event:zw_307（0.000） | scholarship 2 |
| zhaozhou | 2 | 2 | **0.000** | event:zz_595（0.000） | scholarship 2 |
| zhenghe | 2 | 2 | **0.000** | event:zh_1405（0.000） | scholarship 2 |
| zhongli | 3 | 3 | **0.000** | event:zl_jz（0.000） | scholarship 3 |
| zijincheng | 2 | 2 | **0.000** | event:zj_1406（0.000） | scholarship 2 |
| zuchongzhi | 2 | 2 | **0.000** | event:zc_463（0.000） | scholarship 2 |

## 明内部派系细分（faction · 明朝利益集团立场）

> 下列统计仅含 `source.faction` 非空的断言——即明朝内部各利益集团。同一事件若不同派系记载冲突，此处可见叙述对立。

| 派系 | 断言数 | 涉及场景 | 代表来源 |
|---|---|---|---|
| 封疆大吏 / 辽东经略系 | 30 | 辽阳、萨尔浒、shenyang | sanchaoliao_shilu |
| 内臣 / 宦官（独立于阉党） | 9 | guangning | zhuozhongzhi |

## 事件共振表（按共振度升序：最不共振的最值得补）

| 事件 | 切片 | 共振 | 覆盖 | 分歧 | 缺口 | 总数 | 明/清/朝鲜/综述 |
|---|---|---|---|---|---|---|---|
| event:bc_1281 | bencao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bc_1578 | bencao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_350 | baijia | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_961 | beijiu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_bj | boju | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_eff | beijiu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_jz | beijing | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_ruying | boju | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_schools | baijia | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_wa | beijing | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_wu | boju | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:bj_yu | beijing | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cb_cao | chibi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cb_jz | chibi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cb_lk | chibi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ch_jz | canhebei | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ch_wei | canhebei | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ch_yan | canhebei | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cp_chu | chengpu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cp_jin | chengpu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cp_jz | changping/chengpu | **0.000** | 0/3 | 1.00 | 0.00 | 2 | 0 / 0 / 0 / 0 |
| event:cp_kr | changping | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cp_sd | changping | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cq_960a | chenqiao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cq_960b | chenqiao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cs_209a | chensheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cs_209b | chensheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cs_jin | caishiji | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cs_jz | caishiji | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cs_yu | caishiji | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cy_1004 | chanyuan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:cy_1005 | chanyuan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dj_168 | dujiangyan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dj_256 | dujiangyan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dj_today | dujiangyan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dw_1876 | dingwu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dw_1877 | dingwu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dw_relief | dingwu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dx_582 | sui_daxing | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dx_583 | sui_daxing | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dy_196 | dong_han_yi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dy_217 | dong_han_yi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dy_book | dong_han_yi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dy_jz | diaoyucheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dy_meng | diaoyucheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dy_wang | diaoyucheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dz_134 | dunzun | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:dz_taixue | dunzun | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_01 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.00 | 2 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_02 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.00 | 5 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_03 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.33 | 3 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_04 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.50 | 2 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_05 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.00 | 2 | 0 / 0 / 0 / 0 |
| event:ev_three_campaigns_01 | three_campaigns | **0.000** | 0/3 | 0.33 | 0.20 | 5 | 0 / 0 / 0 / 0 |
| event:ev_three_campaigns_02 | three_campaigns | **0.000** | 0/3 | 0.25 | 0.00 | 5 | 0 / 0 / 0 / 0 |
| event:ev_three_campaigns_03 | three_campaigns | **0.000** | 0/3 | 0.33 | 0.00 | 4 | 0 / 0 / 0 / 0 |
| event:ev_yellow_sea_1894_02 | yellow_sea_1894 | **0.000** | 0/3 | 0.57 | 0.07 | 14 | 0 / 0 / 0 / 14 |
| event:fi_compass | four_inv | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:fi_gun | four_inv | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:fi_paper | four_inv | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:fi_print | four_inv | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:fs_212 | fenshu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:fs_213 | fenshu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:fs_jin | feishui | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:fs_jz | feishui | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:fs_qin | feishui | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ft_67 | fotao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ft_temple | fotao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gc_ming | grand_canal | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gc_sui | grand_canal | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gc_yuan | grand_canal | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gd_jz | guandu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gd_wuchao | guandu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gd_yuan | guandu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gl_jz | guiling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gl_qi | guiling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gl_wei | guiling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gw_han | great_wall | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gw_ming | great_wall | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gw_qin | great_wall | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gx_ge | gaixia | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gx_han | gaixia | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:gx_wj | gaixia | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hc_875 | huangchao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hc_880 | huangchao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hh_1128 | huanghe | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hh_1194 | huanghe | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hh_1494 | huanghe | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hh_1855 | huanghe | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hh_wangjing | huanghe | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hh_yu | huanghe | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hj_1019 | song_he_jue | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hj_1351 | hongjin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hj_1368 | hongjin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hj_184 | huangjin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hj_185 | huangjin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hj_dukou | song_he_jue | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hj_late | song_he_jue | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hj_spread | huangjin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hl_jz | hulao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hl_shi | hulao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hl_wei | hulao | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hm_guan | humen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hm_jz | humen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hm_ying | humen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hs_jin | heshangyuan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hs_jz | heshangyuan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hs_wu | heshangyuan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:huai_xi_jufa | tang_huai_xi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:huai_xi_ping | tang_huai_xi | **0.000** | 0/3 | 0.00 | 0.00 | 2 | 0 / 0 / 0 / 0 |
| event:hx_after | huaxian | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hx_legacy | huaxian | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:hx_main | huaxian | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jl_jz | julu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jl_qin | julu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jl_xiang | julu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jn_1399 | jingnan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jn_1402 | jingnan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jp_220 | jiupin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jp_later | jiupin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:js_533 | jiasixie | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:js_544 | jiasixie | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jz_1712 | jiuzi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jz_1722 | jiuzi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jz_743 | jianzhen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:jz_753 | jianzhen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:kj_1905 | keju | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:kj_605 | keju | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:kj_tang | keju | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ky_jz | kunyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ky_liu | kunyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ky_wan | kunyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lc_1073 | locust | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lc_1628 | lizicheng/locust | **0.000** | 0/3 | 0.00 | 0.00 | 2 | 0 / 0 / 0 / 0 |
| event:lc_1641 | lizicheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lc_1644 | lizicheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lc_1645 | lizicheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lc_1943 | locust | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lc_622 | locust | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lc_715 | locust | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:li_1580 | little_ice | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:li_1637 | little_ice | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:li_1640 | little_ice | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:li_1641 | little_ice | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:li_1644 | little_ice | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:li_su_xueye | tang_huai_xi | **0.000** | 0/3 | 0.33 | 0.20 | 5 | 0 / 0 / 0 / 0 |
| event:ll_17 | lvlin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ll_23 | lvlin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lq_214 | lingqu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lq_use | lingqu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ls_780 | liangshui | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ls_eff | liangshui | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lx_1175 | lixue | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:lx_1241 | lixue | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:mb_chu | mobai | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:mb_hq | mobai | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:mb_wq | mobai | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:mf_1627 | ming_fall | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:mf_1644_3 | ming_fall | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:mf_1644_q | ming_fall | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ml_jz | maling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ml_qi | maling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ml_wei | maling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:py_chen | poyanghu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:py_jz | poyanghu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:py_zhu | poyanghu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qh_1644 | qing_han | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qh_1645 | qing_han | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qh_late | qing_han | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qn_221 | qin_unify | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qn_222 | qin_unify | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qn_223 | qin_unify | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qn_225 | qin_unify | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qn_228 | qin_unify | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:qn_230 | qin_unify | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sk_1072 | shenkuo | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sk_1088 | shenkuo | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sm_587 | sui_mie_chen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sm_589 | sui_mie_chen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sq_210 | shaqiu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sq_false | shaqiu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sy_338 | shangyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sy_350 | shangyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sy_356 | shangyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sy_jz | suiyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sy_we | suiyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:sy_zhang | suiyang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tj_di | tianjing | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tj_wang | tianjing | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tj_xiang | tianjing | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tl_gel | talas | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tl_jz | talas | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tl_tang | talas | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tm_jz | tumu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tm_wa | tumu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tm_ying | tumu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tp_1851 | taiping | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tp_1853 | taiping | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:tp_1864 | taiping | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wa_1069 | wanganshi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wa_1070 | wanganshi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wa_1085 | wanganshi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wc_641 | wencheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wc_temple | wencheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wg_91 | wugu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wg_war | wugu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wm_9 | wangmang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wm_end | wangmang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wm_reform | wangmang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ww_1046 | wuwang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ww_1048 | wuwang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wx_0611 | wuxu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:wx_0908 | wuxu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xh_1010 | xinhai | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xh_1912 | xinhai | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xh_res | xinhai | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xw_493 | xiaowen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xw_494 | xiaowen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xw_496 | xiaowen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xx_626 | xuanwu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xx_after | xuanwu | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xy_cao | xiaoyaojin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xy_jz | xiaoyaojin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xy_zl | xiaoyaojin | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xz_629 | xuanzang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:xz_645 | xuanzang | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yc_jz | yancheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yc_wu | yancheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yc_yue | yancheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yk_e | yaksa | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yk_meng | yaksa | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yk_qing | yaksa | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yl_jz | yiling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yl_liu | yiling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yl_lu | yiling | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ys_1276 | yashan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ys_1279 | yashan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ys_jz | yaoshan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ys_song | yaoshan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ys_yuan | yaoshan | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yu_1271 | yuan_duo | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:yu_1276 | yuan_duo | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zc_463 | zuchongzhi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zc_pi | zuchongzhi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zf_33 | zhaofen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zf_peace | zhaofen | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zh_132 | zhangheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zh_1405 | zhenghe | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zh_1433 | zhenghe | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zh_test | zhangheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zj_1406 | zijincheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zj_1420 | zijincheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zj_1573 | zhangjuzheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zj_1581 | zhangjuzheng | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zl_jz | zhongli | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zl_wei | zhongli | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zl_wei2 | zhongli | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zq_126 | zhangqian | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zq_138 | zhangqian | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zw_307 | zhaowulian | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zw_war | zhaowulian | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zz_595 | zhaozhou | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:zz_later | zhaozhou | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:ice_walls | shenyang | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 0 / 2 / 0 / 0 |
| event:jinzhouwei_mao | jinzhouwei | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 0 / 0 / 2 / 0 |
| 弃宽甸六堡 | 铁岭 | **0.167** | 1/3 | 0.50 | 0.00 | 3 | 0 / 2 / 0 / 1 |
| event:yehe_kaiyuan_attack | yehe | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 0 / 2 / 0 / 0 |
| 铁岭陷落（1619） | 铁岭 | **0.179** | 1/3 | 0.25 | 0.29 | 7 | 0 / 3 / 0 / 4 |
| event:ningyuan_founded | ningyuan | **0.250** | 1/3 | 0.25 | 0.00 | 5 | 0 / 5 / 0 / 0 |
| event:ningyuan_battle | ningyuan | **0.308** | 1/3 | 0.00 | 0.08 | 13 | 0 / 13 / 0 / 0 |
| event:bixieguan_battle | imjin | **0.333** | 3/3 | 0.50 | 0.33 | 6 | 0 / 2 / 3 / 0 |
| event:fushun_founded | fushun | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:fushun_mashi | fushun | **0.333** | 1/3 | 0.00 | 0.00 | 2 | 0 / 1 / 0 / 1 |
| event:fuzhou_fall | fuzhou | **0.333** | 2/3 | 0.00 | 0.50 | 4 | 0 / 2 / 2 / 0 |
| event:fuzhou_founded | fuzhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:gaizhou_founded | gaizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:guangning_founded | guangning | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:guangning_zhen | guangning | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:haizhou_founded | haizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:haizhou_mashi | haizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| 浑河之战（1621） | 辽阳 | **0.333** | 1/3 | 0.00 | 0.00 | 3 | 0 / 1 / 0 / 2 |
| event:jinzhou_founded | jinzhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:jinzhouwei_fall | jinzhouwei | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:jinzhouwei_founded | jinzhouwei | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:ningyuan_wusangui | ningyuan | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:renchen_baofa | imjin | **0.333** | 1/3 | 0.00 | 0.00 | 2 | 0 / 0 / 2 / 0 |
| 萨尔浒之战（广义） | 开原 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 0 / 1 / 0 |
| 尚间崖（北路·马林） | 萨尔浒 | **0.333** | 1/3 | 0.00 | 0.00 | 3 | 1 / 0 / 0 / 2 |
| event:shenyang_founded | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:shenyang_jurchen_capital | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:shenyang_qing_capital | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:shenyang_walls | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:xingzhou_battle | imjin | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 0 / 1 / 0 |
| 叶赫灭亡 | 开原 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:yehe_fall | yehe | **0.333** | 1/3 | 0.00 | 0.00 | 2 | 0 / 2 / 0 / 0 |
| event:yehe_founded | yehe | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:gaizhou_fall | gaizhou | **0.444** | 2/3 | 0.00 | 0.33 | 3 | 1 / 2 / 0 / 0 |
| 辽阳陷落（1621） | 辽阳 | **0.520** | 2/3 | 0.13 | 0.10 | 29 | 8 / 6 / 0 / 15 |
| 杜松渡浑河（西路） | 萨尔浒 | **0.533** | 2/3 | 0.20 | 0.00 | 6 | 1 / 2 / 0 / 3 |
| 萨尔浒主战场 | 萨尔浒 | **0.578** | 2/3 | 0.08 | 0.06 | 33 | 11 / 0 / 12 / 10 |
| event:fushun_fall | fushun | **0.580** | 2/3 | 0.07 | 0.06 | 16 | 0 / 15 / 1 / 0 |
| 阿布达里岗（东路·刘綎） | 萨尔浒 | **0.667** | 2/3 | 0.00 | 0.00 | 2 | 0 / 1 / 1 / 0 |
| event:cefeng_heyi | imjin | **0.667** | 2/3 | 0.00 | 0.00 | 2 | 0 / 1 / 0 / 0 |
| event:ningjin_dajie | ningyuan | **0.667** | 2/3 | 0.00 | 0.00 | 2 | 1 / 1 / 0 / 0 |
| event:pyongyang_battle | imjin | **0.667** | 3/3 | 0.33 | 0.00 | 5 | 0 / 1 / 3 / 0 |
| 南路溃逃（李如柏） | 萨尔浒 | **0.667** | 2/3 | 0.00 | 0.00 | 3 | 1 / 1 / 0 / 1 |
| event:haizhou_fall | haizhou | **0.750** | 3/3 | 0.00 | 0.25 | 4 | 1 / 2 / 1 / 0 |
| event:guangning_fall | guangning | **0.785** | 3/3 | 0.08 | 0.15 | 20 | 2 / 2 / 1 / 15 |
| 开铁之战（开原陷落） | 开原 | **0.818** | 3/3 | 0.00 | 0.18 | 11 | 4 / 2 / 1 / 4 |
| event:shenyang_relief | shenyang | **0.825** | 3/3 | 0.12 | 0.06 | 32 | 11 / 5 / 2 / 14 |
| event:jinzhou_songjin | jinzhou | **0.923** | 3/3 | 0.00 | 0.08 | 13 | 2 / 1 / 1 / 9 |

## 解读

- **高共振**（≈1.0）：三方都覆盖、无分歧、无缺口 → 这件事史料共识强。
- **低共振**（≈0.0）：覆盖不足、分歧剧烈、或充满缺口 → 这就是"补这条史料能撬动多大"的最直白答案。
- 萨尔浒 `event:sarhu` 与开铁 `event:kaifa` 已通过 K026 / K026a–d 完成三方闭合。
- 新入表的铁岭 / 辽阳切片当前共振偏低，**这不是 bug，是待补清单**：缺的主要是朝鲜方视角与清方细节，见各切片 `layer: gap` 断言。
- **派系维度（v0.17）**：`明史` 已归「清方」桶（清修），真正明方声音由明人自著（三朝辽事实录等）与朝鲜（光海君日记）承担；明朝内部东林/阉党/浙党/盐商/内臣/封疆各集团又因自身利害润色夸张，详见上方「明内部派系细分」与 `data/bibliography.json`。
