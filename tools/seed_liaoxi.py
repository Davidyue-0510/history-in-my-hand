# -*- coding: utf-8 -*-
"""
生成辽西 / 辽南 5 县的最小诚实骨架（v0.6 扩展）。

背景：地形网格只覆盖 122–126.8°E / 40–43.3°N（辽东核心区）。
辽西（广宁/锦州/宁远）与辽南（复州/金州）都在网格之外——
这是「共享真实地形」主张的诚实边界：这些县以断言 / 史料 / 线索呈现，
地形层在县页与枢纽地图都会显式标注「网格外」，绝不伪造高程。

写作策略同 seed_counties.py：每县 6–7 条断言（2–3 record + 1 scholarship + 2 gap 含 lead）。
引用既有 source id，并新增两个被引用的辽西/辽南专属史料
（chongzhen_shilu 崇祯实录 / qing_taizong_shilu 清太宗实录），其余 party 已在 vocab.json。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'data')

BASE = json.load(open(os.path.join(DATA, 'shenyang', 'sources.json'), encoding='utf-8'))['sources']
BASE_BY_ID = {s['id']: s for s in BASE}

EXTRA_SOURCES = {
    'chongzhen_shilu': {
        "id": "chongzhen_shilu", "title": "明崇祯实录",
        "party": "明廷官方", "stance_label": "本朝官修·当代",
        "distance_label": "成书约 1645，距崇祯事约数年",
        "color": "#A0473A", "compiler": "明史馆", "period": "崇祯朝"
    },
    'qing_taizong_shilu': {
        "id": "qing_taizong_shilu", "title": "清太宗实录",
        "party": "清修官史", "stance_label": "敌方官修",
        "distance_label": "初纂 1644 后屡经改窜，距皇太极事数年",
        "color": "#7B5C3E", "compiler": "清实录馆", "period": "天聪/崇德"
    },
}


SKELETONS = {
    "guangning": {
        "region": "liaoxi", "title": "广宁", "dossier_label": "广宁",
        "subtitle": "辽西军政中心 · 广宁卫 · 天启二年 (1622) 陷落",
        "primary_place": "guangning", "dossier_event": "event:guangning_fall",
        "cited_sources": ["mingshi", "ming_xizong_shilu", "chao_xiandai", "modern"],
        "places": [
            ("guangning", "广宁城", 121.78, 41.62, "city", "辽宁北镇市", "明广宁卫/辽东镇驻地，辽西最后重心"),
            ("guangning_wei", "广宁卫", 121.78, 41.62, "wei", "辽宁北镇市", "洪武二十五年置，隶辽东都司"),
            ("shanhaiguan", "山海关", 119.75, 40.00, "guan", "河北秦皇岛", "辽西走廊终端，明蓟镇门户"),
            ("shenyang_cheng", "沈阳", 123.43, 41.81, "city", "辽宁沈阳市", "1621 陷后辽东重心西迁广宁"),
            ("yanshan", "燕山", 119.50, 40.40, "mountain", "冀辽交界", "辽西走廊北缘"),
        ],
        "persons": [
            ("xiongtingbing", "熊廷弼", "辽东经略", "主守，与王化贞经抚不和，广宁陷后受诛"),
            ("wang_huazhen", "王化贞", "辽东巡抚", "主战，广宁之战弃城逃"),
            ("sun_degong", "孙得功", "广宁将", "广宁陷前通敌，开门迎后金"),
            ("nuerhaci", "努尔哈赤", "后金大汗", "1622 年正月取广宁"),
        ],
        "events": [
            ("guangning_founded", "event:guangning_founded", 1392, "洪武二十五年", "广宁卫建置", "建置", "明置广宁卫，隶辽东都司，为辽西重镇。"),
            ("guangning_zhen", "event:guangning_zhen", 1449, "正统十四年", "辽东镇移驻广宁", "行政", "土木之变后辽东镇总兵移驻广宁，成为辽西军政中心。"),
            ("guangning_fall", "event:guangning_fall", 1622, "天启二年正月", "广宁陷落", "战事", "沈阳辽阳既陷，明经略熊廷弼、巡抚王化贞经抚不和；努尔哈赤取广宁，王化贞弃城，孙得功降，熊廷弼护辽西百万难民入山海关。明尽失辽西。"),
        ],
        "edges": [
            ("guangning", "shenyang_cheng", "admin", "广宁—沈阳（辽西—辽东）"),
            ("guangning", "shanhaiguan", "admin", "广宁—山海关（辽西走廊）"),
        ],
    },

    "jinzhou": {
        "region": "liaoxi", "title": "锦州", "dossier_label": "锦州",
        "subtitle": "辽西锁钥 · 松锦之战 (1641–1642) · 祖大寿降",
        "primary_place": "jinzhou_cheng", "dossier_event": "event:jinzhou_songjin",
        "cited_sources": ["mingshi", "chongzhen_shilu", "qing_taizong_shilu", "chao_xiandai", "modern"],
        "places": [
            ("jinzhou_cheng", "锦州城", 121.13, 41.10, "city", "辽宁锦州市", "明锦州卫，辽西走廊咽喉"),
            ("songshan", "松山", 121.18, 41.05, "battle", "辽宁锦州市南", "松锦决战主战场，洪承畴兵败处"),
            ("ningyuan", "宁远", 120.70, 40.62, "city", "辽宁兴城市", "锦州南向卫城，关宁锦防线"),
            ("guangning", "广宁", 121.78, 41.62, "city", "辽宁北镇市", "锦州北向卫城"),
            ("shanhaiguan", "山海关", 119.75, 40.00, "guan", "河北秦皇岛", "辽西走廊终端"),
        ],
        "persons": [
            ("zu_dashou", "祖大寿", "明总兵", "两度被围降清（大凌河/锦州），吴三桂舅父"),
            ("hong_chengchou", "洪承畴", "蓟辽总督", "松锦之战明军主帅，兵败被俘，后降清"),
            ("huangtaiji", "皇太极", "清太宗", "1641–1642 围锦州、松山，灭明辽西机动兵力"),
            ("duoergun", "多尔衮", "清睿亲王", "松锦之战前线统帅"),
        ],
        "events": [
            ("jinzhou_founded", "event:jinzhou_founded", 1391, "洪武二十四年", "锦州卫建置", "建置", "明置广宁中屯卫于锦州，后定名锦州卫，隶辽东都司。"),
            ("jinzhou_songjin", "event:jinzhou_songjin", 1642, "崇祯十四至十五年", "松锦之战", "战事", "崇祯十四年清围锦州，十五年松山决战，洪承畴兵败被俘，祖大寿以锦州降。明辽西机动兵力丧尽，清兵直叩山海关。"),
        ],
        "edges": [
            ("jinzhou_cheng", "ningyuan", "admin", "锦州—宁远（关宁锦防线）"),
            ("jinzhou_cheng", "guangning", "admin", "锦州—广宁"),
            ("jinzhou_cheng", "shanhaiguan", "admin", "锦州—山海关"),
        ],
    },

    "ningyuan": {
        "region": "liaoxi", "title": "宁远", "dossier_label": "宁远",
        "subtitle": "关宁锦防线核心 · 宁远之战 (1626) · 袁崇焕",
        "primary_place": "ningyuan", "dossier_event": "event:ningyuan_battle",
        "cited_sources": ["mingshi", "ming_xizong_shilu", "qing_taizong_shilu", "chongzhen_shilu", "modern"],
        "places": [
            ("ningyuan", "宁远城", 120.70, 40.62, "city", "辽宁兴城市", "明宁远卫，关宁锦防线核心"),
            ("juehua", "觉华岛", 120.55, 40.48, "island", "辽宁兴城菊花岛", "明辽东囤粮岛，宁远之战被焚"),
            ("jinzhou_cheng", "锦州", 121.13, 41.10, "city", "辽宁锦州市", "宁远北向卫城"),
            ("shanhaiguan", "山海关", 119.75, 40.00, "guan", "河北秦皇岛", "宁远南向，走廊终端"),
        ],
        "persons": [
            ("yuan_chonghuan", "袁崇焕", "蓟辽督师", "宁远/宁锦拒清，后冤死；「五年平辽」"),
            ("zu_dashou", "祖大寿", "宁远副总兵", "袁崇焕部下，后两度降清"),
            ("huangtaiji", "皇太极", "清太宗", "1627 宁锦、1629 己巳入塞"),
            ("nuerhaci", "努尔哈赤", "后金大汗", "1626 攻宁远受伤，七月死"),
            ("wu_sangui", "吴三桂", "宁远总兵", "崇祯末镇宁远，1644 引清兵入关"),
            ("zhao_shuaijiao", "赵率教", "明总兵", "宁锦之战守锦州，战死"),
        ],
        "events": [
            ("ningyuan_founded", "event:ningyuan_founded", 1428, "宣德三年", "宁远卫建置", "建置", "明置宁远卫，隶辽东都司，为辽西最南大城。"),
            ("ningyuan_battle", "event:ningyuan_battle", 1626, "天命十一年", "宁远之战", "战事", "努尔哈赤率军攻宁远，袁崇焕凭坚城与红夷大炮拒守，努尔哈赤受创，七月死。明清对峙转折点。"),
            ("ningjin_dajie", "event:ningjin_dajie", 1627, "天启七年", "宁锦大捷", "战事", "皇太极攻宁远、锦州不利，明军凭城固守获胜，清退。"),
            ("ningyuan_wusangui", "event:ningyuan_wusangui", 1644, "崇祯十七年", "吴三桂引清入关", "战事", "李自成破北京，吴三桂弃宁远入关，引清兵入关击李自成。关宁锦防线终结。"),
        ],
        "edges": [
            ("ningyuan", "jinzhou_cheng", "admin", "宁远—锦州"),
            ("ningyuan", "shanhaiguan", "admin", "宁远—山海关"),
        ],
    },

    "fuzhou": {
        "region": "liaonan", "title": "复州", "dossier_label": "复州",
        "subtitle": "辽南陆桥 · 复州卫 · 天启元年 (1621) 陷落",
        "primary_place": "fuzhou_cheng", "dossier_event": "event:fuzhou_fall",
        "cited_sources": ["mingshi", "qing_taizu_shilu", "chao_xiandai", "modern"],
        "places": [
            ("fuzhou_cheng", "复州城", 121.97, 39.63, "city", "辽宁瓦房店市", "明复州卫，辽南陆桥"),
            ("wau_fangdian", "瓦房店", 121.97, 39.63, "city", "辽宁瓦房店市", "今复州所在"),
            ("gaizhou_cheng", "盖州", 121.97, 40.40, "city", "辽宁盖州市", "复州北向卫城"),
            ("jinzhouwei_cheng", "金州", 121.70, 39.09, "city", "辽宁大连金州区", "复州南向，半岛南端"),
            ("pidao", "皮岛", 124.50, 39.95, "island", "朝鲜椴岛/皮岛", "毛文龙东江镇基地，袭扰辽南"),
        ],
        "persons": [
            ("mao_wenlong", "毛文龙", "东江总兵", "据皮岛创东江镇，袭扰复州/金州沿海"),
            ("amin", "阿敏", "后金二贝勒", "1621 南下取复州/盖州"),
            ("nuerhaci", "努尔哈赤", "后金大汗", "1621 取辽南"),
        ],
        "events": [
            ("fuzhou_founded", "event:fuzhou_founded", 1381, "洪武十四年", "复州卫建置", "建置", "明置复州卫，隶辽东都司，扼辽南陆桥。"),
            ("fuzhou_fall", "event:fuzhou_fall", 1621, "天启元年", "复州陷落", "战事", "沈阳辽阳既陷，后金别将阿敏南下取复州，与盖州、海州同月陷。"),
        ],
        "edges": [
            ("fuzhou_cheng", "gaizhou_cheng", "admin", "复州—盖州"),
            ("fuzhou_cheng", "jinzhouwei_cheng", "admin", "复州—金州"),
            ("fuzhou_cheng", "pidao", "mashi", "复州—皮岛（东江袭扰）"),
        ],
    },

    "jinzhouwei": {
        "region": "liaonan", "title": "金州", "dossier_label": "金州",
        "subtitle": "辽东半岛南端 · 金州卫 · 天启元年 (1621) 陷落",
        "primary_place": "jinzhouwei_cheng", "dossier_event": "event:jinzhouwei_fall",
        "cited_sources": ["mingshi", "qing_taizu_shilu", "chao_xiandai", "modern"],
        "places": [
            ("jinzhouwei_cheng", "金州城", 121.70, 39.09, "city", "辽宁大连金州区", "明金州卫，辖旅顺口，半岛南端"),
            ("lvshun", "旅顺口", 121.25, 38.80, "guan", "辽宁大连旅顺口", "金州卫辖，海运要塞"),
            ("fuzhou_cheng", "复州", 121.97, 39.63, "city", "辽宁瓦房店市", "金州北向卫城"),
            ("pidao", "皮岛", 124.50, 39.95, "island", "朝鲜椴岛", "毛文龙东江镇，一度收复金州/旅顺"),
            ("denglai", "登莱", 120.50, 37.50, "city", "山东蓬莱", "金州海运对岸，明援辽通道"),
        ],
        "persons": [
            ("mao_wenlong", "毛文龙", "东江总兵", "据皮岛，1621–1622 一度收复金州、旅顺"),
            ("amin", "阿敏", "后金二贝勒", "1621 取金州"),
            ("nuerhaci", "努尔哈赤", "后金大汗", "1621 取辽南"),
        ],
        "events": [
            ("jinzhouwei_founded", "event:jinzhouwei_founded", 1377, "洪武十年", "金州卫建置", "建置", "明置金州卫，辖旅顺口，扼辽东半岛南端海运。"),
            ("jinzhouwei_fall", "event:jinzhouwei_fall", 1621, "天启元年", "金州陷落", "战事", "后金取辽南，金州卫陷；旋为毛文龙东江镇一度收复。"),
            ("jinzhouwei_mao", "event:jinzhouwei_mao", 1621, "天启元年至二年", "东江收复金州", "战事", "毛文龙据皮岛/铁山，渡海袭扰，一度收复金州、旅顺，牵制后金南翼。"),
        ],
        "edges": [
            ("jinzhouwei_cheng", "fuzhou_cheng", "admin", "金州—复州"),
            ("jinzhouwei_cheng", "pidao", "mashi", "金州—皮岛（东江）"),
            ("jinzhouwei_cheng", "denglai", "mashi", "金州—登莱（海运）"),
        ],
    },
}


def emit(dirp, fn, data):
    with open(os.path.join(dirp, fn), 'w', encoding='utf-8', newline='\n') as f:
        json.dump(data, f, ensure_ascii=False, indent=1)


def emit_jsonl(dirp, fn, rows):
    with open(os.path.join(dirp, fn), 'w', encoding='utf-8', newline='\n') as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False))
            f.write('\n')


def build_assertions(k, sk):
    if k == 'guangning':
        return [
            {"id": "G001", "subject": "event:guangning_founded", "predicate": "建置年",
             "value_text": "洪武二十五年 (1392) 始置广宁卫, 隶辽东都司",
             "source": "mingshi", "layer": "record", "era": "洪武二十五年",
             "place": "guangning", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "洪武二十五年, 置广宁卫, 隶辽东都司。",
             "note": "广宁在辽代即为显州, 明初降为卫, 正统后辽东镇移驻。"},
            {"id": "G002", "subject": "event:guangning_zhen", "predicate": "军政地位",
             "value_text": "正统十四年 (1449) 土木之变后, 辽东镇总兵移驻广宁, 成为辽西军政中心",
             "source": "mingshi", "layer": "record", "era": "正统十四年",
             "place": "guangning", "confidence": 0.85, "quote_status": "paraphrase_unverified",
             "quote": "土木之变, 辽东镇总兵移驻广宁, 节制辽西诸卫。",
             "note": "广宁由此成为明在辽西的最高军事支点。"},
            {"id": "G003", "subject": "event:guangning_fall", "predicate": "陷落年份",
             "value_text": "天启二年正月 (1622), 努尔哈赤取广宁, 王化贞弃城, 孙得功降, 熊廷弼护辽西难民入山海关",
             "source": "ming_xizong_shilu", "layer": "record", "era": "天启二年正月",
             "place": "guangning", "confidence": 0.95, "quote_status": "paraphrase_unverified",
             "quote": "天启二年正月, 后金取广宁, 王化贞弃城走, 孙得功降, 熊廷弼以辽西民众入关。",
             "note": "经略熊廷弼主守、巡抚王化贞主战, 经抚不和是广宁速陷的直接原因。"},
            {"id": "G004", "subject": "event:guangning_fall", "predicate": "朝鲜视角",
             "value_text": "李朝闻广宁陷, 知明失辽西, 急议防鸭绿江、增兵边境",
             "source": "chao_xiandai", "layer": "record", "era": "天启二年",
             "place": "guangning", "confidence": 0.7, "quote_status": "paraphrase_unverified",
             "quote": "广宁已陷, 辽西尽失, 朝议沿江增戍, 以防清兵渡。",
             "note": "朝鲜对广宁之陷的反应, 与明方记载相互印证明已无辽西屏障。"},
            {"id": "G005", "subject": "event:guangning_fall", "predicate": "败因主流说",
             "value_text": "学界主流：广宁之失主因经略熊廷弼与巡抚王化贞战略相左、经抚不和, 非单纯兵力不敌",
             "source": "modern", "layer": "scholarship", "era": "天启二年",
             "place": "guangning", "confidence": 0.88, "quote_status": "paraphrase_unverified",
             "quote": "广宁之败, 经抚异议, 事权不一, 非战之罪也。",
             "note": "亦有学者强调明辽东总体战略空虚, 广宁孤城难守, 不应全归咎于人争。"},
            {"id": "G010", "subject": "event:guangning_fall", "predicate": "明军兵力部署",
             "value_text": "广宁之战明军在辽西的实际总兵力与阵地部署, 三方记载数字不一, 未见统一核定",
             "source": "mingshi", "layer": "gap", "era": "天启二年正月",
             "place": "guangning", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《明熹宗实录》天启二年正月至二月逐卷 / 《明史·熊廷弼王化贞传》/ 清初《满文老档》天命七年",
                      "skills": ["古文", "统计"], "accept": "给出广宁陷落时明军在辽西的估计兵力区间与主要部署, 注明分歧来源",
                      "effort": "2-3 周"}},
            {"id": "G011", "subject": "event:guangning_fall", "predicate": "经抚责任归属",
             "value_text": "熊廷弼「主守」与王化贞「主战」孰应为广宁之失负主责, 明、清、现代三方叙事侧重不同",
             "source": "mingshi", "layer": "gap", "era": "天启二年",
             "place": "guangning", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《明史·熊廷弼传》《明史·王化贞传》/ 《明熹宗实录》/ 现代研究 (如 李光涛 相关考)",
                      "skills": ["古文"], "accept": "整理至少两方史料对经抚责任的不同表述, 标出史料政治立场的影响",
                      "effort": "1-2 周"}},
        ]
    if k == 'jinzhou':
        return [
            {"id": "J001", "subject": "event:jinzhou_founded", "predicate": "建置年",
             "value_text": "洪武二十四年 (1391) 始置广宁中屯卫于锦州, 后定名锦州卫",
             "source": "mingshi", "layer": "record", "era": "洪武二十四年",
             "place": "jinzhou_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "洪武二十四年, 置广宁中屯卫于锦州。",
             "note": "锦州为辽西走廊咽喉, 北卫广宁、南卫宁远。"},
            {"id": "J002", "subject": "event:jinzhou_songjin", "predicate": "清围锦州",
             "value_text": "崇祯十四年 (1641), 清军围锦州, 祖大寿被围于城",
             "source": "chongzhen_shilu", "layer": "record", "era": "崇祯十四年",
             "place": "jinzhou_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "崇祯十四年, 大清兵围锦州, 祖大寿御于城。",
             "note": "松锦之战序幕, 明调洪承畴总督蓟辽援锦。"},
            {"id": "J003", "subject": "event:jinzhou_songjin", "predicate": "松锦决战结果",
             "value_text": "崇祯十五年 (1642) 松山决战, 洪承畴兵败被俘, 祖大寿以锦州降, 明辽西机动兵力丧尽",
             "source": "qing_taizong_shilu", "layer": "record", "era": "崇祯十五年",
             "place": "songshan", "confidence": 0.95, "quote_status": "paraphrase_unverified",
             "quote": "十五年, 松山破, 洪承畴被擒, 祖大寿以锦州降。",
             "note": "明方《崇祯实录》记洪承畴「殉难」, 清方记其被擒后降, 立场派生明显分歧。"},
            {"id": "J004", "subject": "event:jinzhou_songjin", "predicate": "朝鲜视角",
             "value_text": "朝鲜使臣沿途记松锦之战清军声势浩大、明援军溃散, 预感明将不保辽西",
             "source": "chao_xiandai", "layer": "record", "era": "崇祯十五年至十六年",
             "place": "jinzhou_cheng", "confidence": 0.7, "quote_status": "paraphrase_unverified",
             "quote": "清兵围锦州, 明援大溃, 辽西旦夕且不保。",
             "note": "朝鲜作为第三方, 对清军战力增长的观察较客观。"},
            {"id": "J005", "subject": "event:jinzhou_songjin", "predicate": "战略后果",
             "value_text": "学界主流：松锦之败使明丧失辽西全部机动兵力, 清军自此直叩山海关, 入关只是时间问题",
             "source": "modern", "layer": "scholarship", "era": "1642",
             "place": "jinzhou_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "松锦既败, 蓟辽无可用之兵, 关门单弱。",
             "note": "此役与 1619 萨尔浒、1621 辽沈之陷并列为明亡三大节点。"},
            {"id": "J010", "subject": "event:jinzhou_songjin", "predicate": "明军总兵力",
             "value_text": "松锦之战明军总兵力, 记载有 8 万 / 13 万 等异说, 未见统一核定",
             "source": "chongzhen_shilu", "layer": "gap", "era": "崇祯十四年至十五年",
             "place": "songshan", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《明崇祯实录》崇祯十四年/十五年逐月 / 《清太宗实录》崇德六年至七年 / 《明史·洪承畴传》",
                      "skills": ["古文", "统计"], "accept": "给出松锦之战明军总兵力的估计区间, 列明各说的出处与采信理由",
                      "effort": "2-3 周"}},
            {"id": "J011", "subject": "person:zu_dashou", "predicate": "两度降清",
             "value_text": "祖大寿两度被围降清（大凌河 1631、锦州 1642）, 其心理与处境三方记载侧重不同",
             "source": "qing_taizong_shilu", "layer": "gap", "era": "1631 / 1642",
             "place": "jinzhou_cheng", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《清太宗实录》天聪五年、崇德七年 / 《明史·祖大寿传》/ 朝鲜使臣见闻录",
                      "skills": ["古文"], "accept": "对比祖大寿两次降清的史料记述, 分析其作为明将降清的特殊处境",
                      "effort": "2-3 周"}},
        ]
    if k == 'ningyuan':
        return [
            {"id": "N001", "subject": "event:ningyuan_founded", "predicate": "建置年",
             "value_text": "宣德三年 (1428) 始置宁远卫, 隶辽东都司",
             "source": "mingshi", "layer": "record", "era": "宣德三年",
             "place": "ningyuan", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "宣德三年, 置宁远卫。",
             "note": "宁远为辽西最南大城, 关宁锦防线核心。"},
            {"id": "N002", "subject": "event:ningyuan_battle", "predicate": "宁远之战结果",
             "value_text": "天命十一年 (1626), 努尔哈赤攻宁远, 袁崇焕凭坚城与红夷大炮拒守, 努尔哈赤受创, 七月死",
             "source": "qing_taizong_shilu", "layer": "record", "era": "天命十一年",
             "place": "ningyuan", "confidence": 0.95, "quote_status": "paraphrase_unverified",
             "quote": "上攻宁远, 袁崇焕凭城固守, 炮伤甚, 七月崩。",
             "note": "明方记「炮毙虏首」, 清方讳言死因, 立场派生分歧明显。"},
            {"id": "N003", "subject": "event:ningjin_dajie", "predicate": "宁锦大捷",
             "value_text": "天启七年 (1627), 皇太极攻宁远、锦州不利, 明军凭城固守获胜, 清退",
             "source": "ming_xizong_shilu", "layer": "record", "era": "天启七年",
             "place": "ningyuan", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "天启七年, 清攻宁远、锦州, 袁崇焕御之, 清兵退。",
             "note": "宁锦之捷是袁崇焕督师期间对清的第二次大胜。"},
            {"id": "N004", "subject": "event:ningyuan_wusangui", "predicate": "吴三桂引清入关",
             "value_text": "崇祯十七年 (1644), 李自成破北京, 吴三桂弃宁远入关, 引清兵入关击李自成",
             "source": "chongzhen_shilu", "layer": "record", "era": "崇祯十七年",
             "place": "ningyuan", "confidence": 0.92, "quote_status": "paraphrase_unverified",
             "quote": "崇祯十七年, 李自成陷北京, 吴三桂弃宁远, 引清兵入关。",
             "note": "关宁锦防线至此终结, 清兵由此入主中原。"},
            {"id": "N005", "subject": "place:ningyuan", "predicate": "战略地位",
             "value_text": "学界主流：宁远是明清对峙二十年的枢纽, 关宁锦防线核心, 袁崇焕据此牵制后金南下",
             "source": "modern", "layer": "scholarship", "era": "1626–1644",
             "place": "ningyuan", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "宁远一城, 牵制后金者二十年。",
             "note": "亦有观点认为明长期被动据城, 丧失野战主动权, 防线本质是消耗。"},
            {"id": "N010", "subject": "event:ningyuan_battle", "predicate": "努尔哈赤死因",
             "value_text": "努尔哈赤是否确因宁远之伤致死, 医学与史料记载有分歧（有说疮发 / 有说背疽 / 有说忧愤）",
             "source": "mingshi", "layer": "gap", "era": "天命十一年",
             "place": "ningyuan", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《明史·太祖本纪》/ 《清太祖实录》天命十一年 / 朝鲜《李朝实录》/ 现代医学史考证",
                      "skills": ["古文", "医学史"], "accept": "梳理努尔哈赤死因的各家说法与史料依据, 给出最可能结论及存疑点",
                      "effort": "2-3 周"}},
            {"id": "N011", "subject": "person:yuan_chonghuan", "predicate": "五年平辽部署",
             "value_text": "袁崇焕「五年平辽」的实际军事部署与朝中掣肘, 三方史料侧重不同",
             "source": "ming_xizong_shilu", "layer": "gap", "era": "天启至崇祯",
             "place": "ningyuan", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《明熹宗实录》《崇祯长编》/ 《明史·袁崇焕传》/ 朝鲜使臣报告",
                      "skills": ["古文"], "accept": "整理袁崇焕经略辽西的具体措施与所受制约, 分析其成败",
                      "effort": "2-4 周"}},
        ]
    if k == 'fuzhou':
        return [
            {"id": "FZ001", "subject": "event:fuzhou_founded", "predicate": "建置年",
             "value_text": "洪武十四年 (1381) 始置复州卫, 隶辽东都司",
             "source": "mingshi", "layer": "record", "era": "洪武十四年",
             "place": "fuzhou_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "洪武十四年, 置复州卫。",
             "note": "复州扼辽南陆桥, 南通金州、北连盖州。"},
            {"id": "FZ002", "subject": "event:fuzhou_fall", "predicate": "陷落年份",
             "value_text": "天启元年 (1621), 后金别将阿敏南下取复州, 与盖州、海州同月陷",
             "source": "qing_taizu_shilu", "layer": "record", "era": "天启元年",
             "place": "fuzhou_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "天命六年, 取复州、盖州。",
             "note": "复州陷与辽沈之陷同属 1621 三月战役序列。"},
            {"id": "FZ003", "subject": "event:fuzhou_fall", "predicate": "东江袭扰",
             "value_text": "毛文龙据皮岛创东江镇, 浮海袭扰复州、金州沿海, 牵制后金南翼",
             "source": "chao_xiandai", "layer": "record", "era": "天启元年起",
             "place": "pidao", "confidence": 0.8, "quote_status": "paraphrase_unverified",
             "quote": "毛文龙据皮岛, 时出兵袭复州、金州沿海。",
             "note": "东江镇活动使后金南向海运与朝鲜通道长期受扰。"},
            {"id": "FZ004", "subject": "place:fuzhou_cheng", "predicate": "战略地位",
             "value_text": "学界综合：复州是辽南与辽西的陆桥, 1621 后成为明军海上反攻的跳板",
             "source": "modern", "layer": "scholarship", "era": "1621 后",
             "place": "fuzhou_cheng", "confidence": 0.85, "quote_status": "paraphrase_unverified",
             "quote": "复州居辽南陆桥, 为东江镇袭辽之跳板。",
             "note": "与金州同为辽南门户, 海陆皆要。"},
            {"id": "FZ010", "subject": "event:fuzhou_fall", "predicate": "陷落具体月日",
             "value_text": "复州陷落的具体月日与明军反应, 三方记载略有出入, 未见精确到日",
             "source": "qing_taizu_shilu", "layer": "gap", "era": "天启元年",
             "place": "fuzhou_cheng", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《清太祖实录》天命六年 / 《明熹宗实录》天启元年 / 朝鲜《李朝实录》",
                      "skills": ["古文"], "accept": "核定复州陷落的具体月日与明方弃守过程",
                      "effort": "1-2 周"}},
            {"id": "FZ011", "subject": "event:fuzhou_fall", "predicate": "东江活动频率",
             "value_text": "东江镇在复州/金州一带的实际活动频率与战果, 明清两方评价悬殊（明方夸大、清方淡化）",
             "source": "chao_xiandai", "layer": "gap", "era": "1621–1629",
             "place": "pidao", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《明熹宗实录》毛文龙屡疏 / 《清太祖实录》/ 朝鲜《李朝实录》皮岛往来",
                      "skills": ["古文", "统计"], "accept": "量化东江镇对复州/金州袭击的次数与成果, 对比双方叙事",
                      "effort": "2-3 周"}},
        ]
    if k == 'jinzhouwei':
        return [
            {"id": "JN001", "subject": "event:jinzhouwei_founded", "predicate": "建置年",
             "value_text": "洪武十年 (1377) 始置金州卫, 辖旅顺口, 扼辽东半岛南端海运",
             "source": "mingshi", "layer": "record", "era": "洪武十年",
             "place": "jinzhouwei_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "洪武十年, 置金州卫, 辖旅顺口。",
             "note": "金州卫为辽东最南卫所, 海运通登莱、朝鲜。"},
            {"id": "JN002", "subject": "event:jinzhouwei_fall", "predicate": "陷落年份",
             "value_text": "天启元年 (1621), 后金取辽南, 金州卫陷",
             "source": "qing_taizu_shilu", "layer": "record", "era": "天启元年",
             "place": "jinzhouwei_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "天命六年, 取金州。",
             "note": "金州陷后, 辽东半岛南端尽入后金, 唯沿海为东江镇所扰。"},
            {"id": "JN003", "subject": "event:jinzhouwei_mao", "predicate": "东江收复",
             "value_text": "毛文龙据皮岛/铁山, 1621–1622 一度收复金州、旅顺, 牵制后金南翼",
             "source": "chao_xiandai", "layer": "record", "era": "天启元年至二年",
             "place": "pidao", "confidence": 0.8, "quote_status": "paraphrase_unverified",
             "quote": "毛文龙渡海, 复金州、旅顺, 旋复为后金所夺。",
             "note": "东江镇收复多为袭取, 未能久守, 但其牵制作用明方与清方评价悬殊。"},
            {"id": "JN004", "subject": "place:jinzhouwei_cheng", "predicate": "战略地位",
             "value_text": "学界综合：金州卫扼辽东半岛南端, 海运通登莱、朝鲜, 是辽南门户与明援辽通道",
             "source": "modern", "layer": "scholarship", "era": "明",
             "place": "jinzhouwei_cheng", "confidence": 0.88, "quote_status": "paraphrase_unverified",
             "quote": "金州卫控半岛南端, 海运通登莱, 援辽之喉。",
             "note": "海运通道使金州在 1621 后仍具战略价值。"},
            {"id": "JN010", "subject": "place:jinzhouwei_cheng", "predicate": "海运通道",
             "value_text": "金州卫经登莱至朝鲜的海运与互市具体路线、频次, 三方记载不详",
             "source": "mingshi", "layer": "gap", "era": "明",
             "place": "denglai", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《明实录》海运逐条 / 《登州府志》/ 朝鲜《通文馆志》辽东往来",
                      "skills": ["古文", "GIS"], "accept": "复原金州—登莱—朝鲜海运路线与年频次, 标注史料缺口",
                      "effort": "2-3 周"}},
            {"id": "JN011", "subject": "event:jinzhouwei_mao", "predicate": "东江复金次数",
             "value_text": "毛文龙收复金州/旅顺的次数与持续时间, 明清两方记载悬殊",
             "source": "chao_xiandai", "layer": "gap", "era": "1621–1622",
             "place": "jinzhouwei_cheng", "confidence": 0,
             "quote_status": "paraphrase_unverified", "quote": "",
             "lead": {"where": "《明熹宗实录》毛文龙疏 / 《清太祖实录》/ 朝鲜使臣皮岛见闻",
                      "skills": ["古文"], "accept": "核定东江镇收复金州/旅顺的次数与每次持续时间",
                      "effort": "1-2 周"}},
        ]
    return []


def build_meta(k, sk):
    lead = "广宁—锦州—宁远—山海关一线是辽西走廊, 明清对峙二十余年的正面。"
    if k == 'guangning':
        lead = ("广宁是辽西军政中心, 正统后辽东镇移驻于此。天启二年 (1622) 广宁陷落, "
                "明尽失辽西, 百万难民入山海关。经抚不和是直接原因。")
    elif k == 'jinzhou':
        lead = ("锦州是辽西锁钥。崇祯十四至十五年 (1641–1642) 松锦之战, 洪承畴兵败被俘、"
                "祖大寿降, 明辽西机动兵力丧尽, 清兵直叩山海关。")
    elif k == 'ningyuan':
        lead = ("宁远是关宁锦防线核心。1626 宁远之战努尔哈赤受创而死, 1627 宁锦大捷,"
                "1644 吴三桂弃宁远引清入关。明清对峙二十年的枢纽在此。")
    elif k == 'fuzhou':
        lead = ("复州扼辽南陆桥, 1621 后金取之。毛文龙东江镇据皮岛, 浮海袭扰复州/金州沿海,"
                "成为明军海上反攻的跳板。")
    elif k == 'jinzhouwei':
        lead = ("金州卫扼辽东半岛南端, 海运通登莱、朝鲜。1621 后金取之, 旋为毛文龙东江镇一度收复。"
                "辽南门户由此易手。")
    return {
        "kind": "county", "region": sk["region"], "title": sk["title"],
        "dossier_label": sk["dossier_label"], "subtitle": sk["subtitle"],
        "primary_place": sk["primary_place"], "dossier_event": sk["dossier_event"],
        "lead": lead, "back": "枢纽",
        "subject_names": {eid: tt for eid, _, _, _, tt, _, _ in sk["events"]},
    }


def main():
    for k, sk in SKELETONS.items():
        d = os.path.join(DATA, k)
        os.makedirs(d, exist_ok=True)
        sources = [BASE_BY_ID[s] for s in sk["cited_sources"] if s in BASE_BY_ID]
        for s in sk["cited_sources"]:
            if s in EXTRA_SOURCES and s not in BASE_BY_ID:
                sources.append(EXTRA_SOURCES[s])
        emit(d, "sources.json", {"sources": sources})
        emit(d, "places.json", {
            "places": [{"id": pid, "name": nm, "lon": lo, "lat": la, "type": tp,
                        "modern": md, "note": nt}
                       for pid, nm, lo, la, tp, md, nt in sk["places"]],
            "rivers": [], "wall": []})
        emit(d, "persons.json", {
            "persons": [{"id": pid, "name": nm, "role": rl, "note": nt}
                        for pid, nm, rl, nt in sk["persons"]]})
        emit(d, "events.json", {
            "events": [{"id": eid, "subject": subj, "year": yr, "era": er,
                        "title": tt, "kind": kd, "text": txt}
                       for eid, subj, yr, er, tt, kd, txt in sk["events"]]})
        emit(d, "edges.json", {
            "edges": [{"from": fr, "to": to, "type": tp, "label": lb}
                      for fr, to, tp, lb in sk["edges"]]})
        assertions = build_assertions(k, sk)
        emit_jsonl(d, "assertions.jsonl", assertions)
        print("  · %s —— %d 条断言, %d 史料" % (k, len(assertions), len(sources)))


if __name__ == "__main__":
    main()
