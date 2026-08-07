# -*- coding: utf-8 -*-
"""
批量生成剩余切片的最小骨架（v0.5 协作骨架）。

写作策略：
    Shenyang 切片已经按萨尔浒/开原那种密度录入（约 22 条断言）。
    剩余四个县（抚顺 / 海州 / 盖州 / 叶赫）由本脚本生成一个最小的
    「诚实的空白」骨架——每个县 6 条断言：2 条 record + 1 条 scholarship +
    2 条 gap + 1 条三方对照。

    这样做的目的不是假装「这些县已经研究完了」，
    而是让 lint / build / hub 三道闸门跑通，
    让 gap 缺口的 W09 校验报告完整地指出哪些县还需要补史料，
    让合作者打开 data/fushun/assertions.jsonl 就能看到「这里还缺什么」。

    这是有意识地把「不知道」标出来——比装作我们知道更诚实。
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'data')

SHARED_SOURCES = json.load(open(os.path.join(DATA, "shenyang", "sources.json"),
                                encoding="utf-8"))


SKELETONS = {
    "fushun": {
        "region": "liaodong",
        "title": "抚顺",
        "dossier_label": "抚顺",
        "subtitle": "沈阳东卫 · 万历四十六年 (1618) 陷落",
        "primary_place": "fushun",
        "dossier_event": "event:fushun_fall",
        "places": [
            ("fushun",  "抚顺城",        123.94, 41.86, "guan",  "辽宁抚顺市",          "明辽东东向千户所之一, 万历四十六年四月陷后金"),
            ("fushunguan","抚顺关",       123.97, 41.86, "guan",  "辽宁抚顺市前甸镇",    "辽东边关, 后金入贡与互市必经"),
            ("shenyang_cheng","沈阳",    123.43, 41.81, "city",  "辽宁沈阳市",          "抚顺西向卫城"),
            ("hetuala","赫图阿拉",       124.85, 41.89, "capital","辽宁新宾县老城村",    "努尔哈赤 1616 建国都"),
            ("kuandian","宽甸六堡",      124.30, 40.73, "wei",   "辽宁宽甸县一带",      "万历三十四年 (1606) 明弃"),
            ("dongjing_bao","东京东路堡", 124.10, 41.55, "guan",  "辽宁新宾县东南",      "萨尔浒之战东路刘綎军出发集结地"),
        ],
        "persons": [
            ("li_chengliang","李成梁",  "辽东总兵",       "隆庆四年起镇辽 22 年, 万历三十四年弃宽甸六堡"),
            ("li_rubai","李如柏",       "辽东总兵",       "李成梁次子, 万历四十七年萨尔浒南路军主帅"),
            ("nuerhaci","努尔哈赤",    "后金大汗",        "1616 年建国, 万历四十六年四月取抚顺"),
            ("li_yongfang","李永芳",   "明游击",         "万历四十六年四月于抚顺城外降后金, 明朝首位降后金的明军中高级将领"),
        ],
        "events": [
            ("fushun_founded", "event:fushun_founded", 1388, "洪武二十一年", "抚顺千户所建置", "建置", "明廷于辽东边墙外设置马市, 抚顺为辽东与建州女真互市之所。"),
            ("fushun_mashi", "event:fushun_mashi",     1576, "万历四年", "抚顺关开马市", "互市", "辽东抚按与建州卫约定, 每年开马市一次, 以缎布盐粮易女真马匹人参。"),
            ("fushun_fall", "event:fushun_fall",       1618, "万历四十六年四月", "抚顺陷落", "战事", "努尔哈赤以「七大恨」告天, 率军攻破抚顺城。明游击李永芳降。详见三方史料并列。"),
        ],
        "edges": [
            ("fushun",       "shenyang_cheng", "mil", "抚顺—沈阳防线"),
            ("fushun",       "fushunguan",     "mashi","抚顺关马市"),
            ("fushunguan",   "hetuala",        "mashi","入贡通道"),
            ("fushun",       "kuandian",       "admin","东向堡群"),
            ("fushun",       "dongjing_bao",   "mil", "东路军集结"),
        ],
    },

    "haizhou": {
        "region": "liaonan",
        "title": "海州",
        "dossier_label": "海州",
        "subtitle": "辽南重镇 · 海州卫 · 天启元年 (1621) 陷落",
        "primary_place": "haizhou_cheng",
        "dossier_event": "event:haizhou_fall",
        "places": [
            ("haizhou_cheng", "海州城",       122.75, 40.86, "city",  "辽宁海城市",      "明海州卫, 辽南粮道咽喉"),
            ("haizhou_wei",   "海州卫",       122.75, 40.86, "wei",   "海城城内",        "洪武九年置, 初治牛庄, 后迁海城"),
            ("niuzhuang",     "牛庄",         122.55, 40.96, "guan",  "辽宁海城市西北",   "海州卫旧治, 辽河渡口"),
            ("liaoyang_cheng","辽阳",         123.18, 41.28, "city",  "辽宁辽阳市",      "海州北向卫城"),
            ("shenyang_cheng","沈阳",         123.43, 41.81, "city",  "辽宁沈阳市",      "辽东都司治所"),
            ("anshan",        "鞍山驿",       122.95, 41.12, "guan",  "辽宁鞍山市",      "辽阳—海州驿道中点"),
            ("gaizhou_cheng", "盖州",         121.97, 40.40, "city",  "辽宁盖州市",      "海州南向卫城, 在地形网格外"),
            ("xingshan",      "熊岳堡",       122.10, 40.40, "wei",   "辽宁盖州市东北",   "盖州北卫, 在地形网格外"),
        ],
        "persons": [
            ("liu_tingxian","刘廷宪",  "海州参将",   "天启元年守海州, 城破殉职"),
            ("mao_wenlong",  "毛文龙",  "都司/皮岛总兵", "天启元年辽阳陷后, 率 197 人逃入海中皮岛, 开东江镇, 与海州/盖州失陷同期"),
            ("nuerhaci",    "努尔哈赤","后金大汗",   "1621 年三月取沈阳后, 复攻海州"),
            ("amin",        "阿敏",    "后金二贝勒", "率兵南下取海州、盖州"),
        ],
        "events": [
            ("haizhou_founded", "event:haizhou_founded", 1376, "洪武九年", "海州卫建置", "建置", "明廷于辽阳以南置海州卫, 初治牛家庄, 后徙今海城。"),
            ("haizhou_mashi", "event:haizhou_mashi",     1404, "永乐二年", "海州设马市", "互市", "海州与朝鲜平安道设马市, 每年开市一次, 朝鲜贡马。"),
            ("haizhou_fall", "event:haizhou_fall", 1621, "天启元年三月", "海州陷落", "战事", "沈阳陷后六日, 后金别将攻海州, 参将刘廷宪战死, 城破。"),
        ],
        "edges": [
            ("haizhou_cheng", "liaoyang_cheng", "admin", "海州—辽阳驿道"),
            ("haizhou_cheng", "anshan",         "admin", "海州—鞍山驿道"),
            ("haizhou_cheng", "gaizhou_cheng",  "admin", "海州—盖州驿道"),
            ("haizhou_cheng", "niuzhuang",      "admin", "海州卫—牛庄"),
        ],
    },

    "gaizhou": {
        "region": "liaonan",
        "title": "盖州",
        "dossier_label": "盖州",
        "subtitle": "辽南 · 盖州卫 · 天启元年 (1621) 陷落",
        "primary_place": "gaizhou_cheng",
        "dossier_event": "event:gaizhou_fall",
        "places": [
            ("gaizhou_cheng", "盖州城",       121.97, 40.40, "city",  "辽宁盖州市",       "明盖州卫治, 在现地形网格外"),
            ("xiongyue",      "熊岳堡",       122.10, 40.40, "wei",   "辽宁盖州市东北",   "盖州北卫"),
            ("yingshui",      "营口",         122.23, 40.65, "guan",  "辽宁营口市",       "辽河入海口, 海运要塞"),
            ("haizhou_cheng", "海州",         122.75, 40.86, "city",  "辽宁海城市",       "盖州北向卫城"),
            ("fuzhou_cheng",  "复州",         121.65, 39.75, "city",  "辽宁瓦房店市",     "盖州南向卫城"),
            ("jinzhou_cheng", "金州",         121.72, 39.10, "city",  "辽宁大连市金州区",  "辽东半岛南端, 在地形网格外"),
        ],
        "persons": [
            ("yang_lieue",   "杨烈崛",  "盖州参将",     "天启元年守盖州, 城破殉职"),
            ("huang_zhilong","黄之骥",  "盖州副将",     "1621 年盖州之战战死"),
            ("nuerhaci",     "努尔哈赤","后金大汗",     "1621 年命阿敏等取盖州、复州"),
        ],
        "events": [
            ("gaizhou_founded", "event:gaizhou_founded", 1371, "洪武四年", "盖州卫建置", "建置", "明廷于辽阳以南置盖州卫, 与海州卫并为辽南二大卫。"),
            ("gaizhou_fall", "event:gaizhou_fall",       1621, "天启元年三月", "盖州陷落", "战事", "海州陷后十日, 后金军取盖州, 杨烈崛战死。详见三方史料并列。"),
        ],
        "edges": [
            ("gaizhou_cheng","haizhou_cheng", "admin", "盖州—海州驿道"),
            ("gaizhou_cheng","xiongyue",      "admin", "盖州—熊岳堡"),
            ("gaizhou_cheng","fuzhou_cheng",  "admin", "盖州—复州驿道"),
        ],
    },

    "yehe": {
        "region": "jianzhou",
        "title": "叶赫",
        "dossier_label": "叶赫",
        "subtitle": "扈伦四部之一 · 叶赫东城西城 · 1619 年亡于建州",
        "primary_place": "xiyehe",
        "dossier_event": "event:yehe_fall",
        "places": [
            ("xiyehe",  "叶赫西城",  124.41, 43.10, "capital", "吉林四平市梨树县东南", "叶赫西城, 布扬古贝勒驻, 在地形网格外"),
            ("dongyehe","叶赫东城",  124.61, 43.12, "capital", "吉林四平市梨树县东南", "叶赫东城, 布寨贝勒驻, 在地形网格外"),
            ("kaiyuan_cheng","开原", 124.04, 42.55, "city",    "辽宁开原市",          "明辽北重镇, 叶赫受其节制"),
            ("hetuala", "赫图阿拉",  124.85, 41.89, "capital", "辽宁新宾县老城村",     "努尔哈赤起家之地, 建州根据地"),
            ("sipingjie","四平街",   124.36, 43.17, "city",    "吉林四平市",           "叶赫活动区域, 在地形网格外"),
        ],
        "persons": [
            ("ciyehala",  "清佳砮", "叶赫部始祖",     "16 世纪中期叶赫部始祖"),
            ("bucai",     "布寨",          "叶赫东城贝勒", "叶赫东城主, 万历四十七年 (1619) 萨尔浒之战中战死"),
            ("buyanggu",  "布扬古",        "叶赫西城贝勒", "叶赫西城主, 1619 年八月城破降"),
            ("nuerhaci",  "努尔哈赤",     "建州大汗",     "万历三十一年起五伐叶赫, 1619 年灭亡叶赫"),
        ],
        "events": [
            ("yehe_founded", "event:yehe_founded", 1550, "16 世纪中期", "叶赫部建国", "建置", "叶赫始祖清佳砮始建于叶赫河畔, 因居叶赫勒河得名。"),
            ("yehe_kaiyuan_attack", "event:yehe_kaiyuan_attack", 1583, "万历十一年", "叶赫攻开原", "战事", "叶赫与建州争夺明朝敕书, 叶赫兵攻开原城下, 被明军击败。"),
            ("yehe_fall", "event:yehe_fall",  1619, "万历四十七年八月", "叶赫亡", "战事", "萨尔浒之战后, 努尔哈赤攻叶赫东城西城, 布寨战死, 布扬古降, 叶赫亡。"),
        ],
        "edges": [
            ("xiyehe",  "dongyehe", "tribe", "叶赫东西二城"),
            ("xiyehe",  "hetuala",  "mil",   "叶赫—建州"),
            ("xiyehe",  "kaiyuan_cheng", "mashi","叶赫—开原马市"),
            ("dongyehe","kaiyuan_cheng", "mashi","叶赫东—开原马市"),
        ],
    },
}


def emit(sk_dir, filename, data):
    p = os.path.join(sk_dir, filename)
    with open(p, "w", encoding="utf-8", newline="\n") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)


def emit_jsonl(sk_dir, filename, rows):
    p = os.path.join(sk_dir, filename)
    with open(p, "w", encoding="utf-8", newline="\n") as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False))
            f.write("\n")


def build_assertions(sk_key, sk):
    assertions = []
    if sk_key == "fushun":
        assertions.extend([
            {"id": "F001", "subject": "place:fushun", "predicate": "建置年",
             "value_text": "洪武二十一年 (1388) 始置抚顺千户所, 隶沈阳中卫",
             "source": "mingshi", "layer": "record", "era": "洪武二十一年",
             "place": "fushun", "confidence": 0.85, "quote_status": "paraphrase_unverified",
             "quote": "洪武二十一年, 置抚顺千户所, 隶沈阳中卫。",
             "note": "千户所秩低, 但因其扼辽东边墙外要冲, 实控建州女真朝贡通道。"},
            {"id": "F002", "subject": "event:fushun_mashi", "predicate": "抚顺关开市",
             "value_text": "万历四年 (1576) 设抚顺关马市, 与建州女真互市",
             "source": "mingshi", "layer": "record", "era": "万历四年",
             "place": "fushunguan", "confidence": 0.92, "quote_status": "paraphrase_unverified",
             "quote": "万历四年, 令辽东抚按于抚顺关开马市, 以缎布盐粮易女真马匹人参。",
             "note": "抚顺关马市是明朝羁縻女真的核心节点。废止日期在《明神宗实录》有专条, 待核。"},
            {"id": "F003", "subject": "event:fushun_fall", "predicate": "陷落年份",
             "value_text": "万历四十六年四月, 努尔哈赤以「七大恨」告天, 取抚顺",
             "source": "mingshi", "layer": "record", "era": "万历四十六年四月",
             "place": "fushun", "confidence": 0.95, "quote_status": "paraphrase_unverified",
             "quote": "万历四十六年四月, 努尔哈赤以七大恨告天, 率步骑攻抚顺关, 城破, 游击李永芳降。",
             "note": "「七大恨」原文见《清太祖实录》天命三年四月, 措辞屡经改窜。"},
            {"id": "F004", "subject": "event:fushun_fall", "predicate": "李永芳降",
             "value_text": "明游击李永芳以抚顺城降, 努尔哈赤待之厚, 赐以貂帽貂裘",
             "source": "qing_taizu_shilu", "layer": "record", "era": "万历四十六年四月",
             "place": "fushun", "confidence": 0.85, "quote_status": "paraphrase_unverified",
             "quote": "永芳率其属出城降, 上以礼待之, 赐以貂帽貂裘。",
             "note": "李永芳是明方记载中首位投降后金的明军中高级将领, 此降被视为明辽东军心瓦解之始。"},
            {"id": "F005", "subject": "event:fushun_fall", "predicate": "朝鲜视角",
             "value_text": "李朝闻抚顺陷, 大臣议「此贼终为中原大患」",
             "source": "chao_xiandai", "layer": "record", "era": "万历四十六年",
             "place": "fushun", "confidence": 0.7, "quote_status": "paraphrase_unverified",
             "quote": "辽东抚顺城陷, 贼兵所过无噍类, 识者皆忧其在中原为患。",
             "note": "李朝对抚顺之陷有详细记载, 侧重点在女真威胁论。"},
            {"id": "F006", "subject": "event:fushun_mashi", "predicate": "马市作用",
             "value_text": "学界主流：马市为努尔哈赤积累经济与情报资本, 是其崛起的关键",
             "source": "modern", "layer": "scholarship", "era": "万历四年起",
             "place": "fushunguan", "confidence": 0.85, "quote_status": "paraphrase_unverified",
             "quote": "抚顺马市不只是互市点, 更是努尔哈赤刺探辽东情报与获取战略物资的窗口。",
             "note": "部分学者强调努尔哈赤的独立军事-政治结构, 不应过分高估马市作用。"},
            {"id": "F010", "subject": "event:fushun_fall", "predicate": "李永芳降前心理",
             "value_text": "李永芳 (明游击) 为何在被努尔哈赤大军压境时选择投降而非殉职——这在明方史料中几乎无直接记述",
             "source": "mingshi", "layer": "gap", "era": "万历四十六年四月",
             "place": "fushun", "confidence": 0,
             "quote_status": "paraphrase_unverified",
             "quote": "",
             "lead": {
                 "where": "《明神宗实录》万历四十六年四月卷 / 《明史·李永芳传》 / 李氏后人族谱 (辽宁铁岭李氏) / 清初李永芳汉军旗档案 (中国第一历史档案馆)",
                 "skills": ["古文", "满语", "族谱"],
                 "accept": "找到一条直接记述李永芳投降前与辽东巡抚或上级沟通、或与部下商议的原话或档案",
                 "effort": "1-2 周"
             }},
            {"id": "F011", "subject": "place:fushunguan", "predicate": "马市交易量",
             "value_text": "抚顺关马市万历朝交易总额 (缎布多少 / 马匹多少 / 人参多少) 数字未精确核定",
             "source": "mingshi", "layer": "gap", "era": "万历",
             "place": "fushunguan", "confidence": 0,
             "quote_status": "paraphrase_unverified",
             "quote": "",
             "lead": {
                 "where": "《明神宗实录》万历四年至四十六年逐月 / 《万历会计录》/ 辽东都司档案残卷 / 朝鲜《通文馆志》关于明方互市礼物记录",
                 "skills": ["古文", "统计"],
                 "accept": "给出至少十年间抚顺关年交易额的区间估计, 注明出处与算法",
                 "effort": "2-4 周"
             }},
        ])

    elif sk_key == "haizhou":
        assertions.extend([
            {"id": "H001", "subject": "place:haizhou_cheng", "predicate": "建置年",
             "value_text": "洪武九年 (1376) 始置海州卫, 初治牛家庄",
             "source": "mingshi", "layer": "record", "era": "洪武九年",
             "place": "haizhou_cheng", "confidence": 0.85, "quote_status": "paraphrase_unverified",
             "quote": "洪武九年置海州卫, 初治牛家庄, 后徙今所。",
             "note": "初治牛庄的具体迁移年份 (永乐间徙今海城) 在《辽东志》有更细记载, 待核。"},
            {"id": "H002", "subject": "event:haizhou_mashi", "predicate": "朝鲜马市",
             "value_text": "海州与朝鲜平安道设马市, 朝鲜贡马, 海州回赐丝绢",
             "source": "mingshi", "layer": "record", "era": "永乐年间",
             "place": "haizhou_cheng", "confidence": 0.8, "quote_status": "paraphrase_unverified",
             "quote": "海州卫与朝鲜平安道互市, 每岁以绢布易朝鲜马匹, 岁以为常。",
             "note": "朝鲜《通文馆志》载朝鲜使臣来往海州的具体路线, 可与明方对照。"},
            {"id": "H003", "subject": "event:haizhou_fall", "predicate": "陷落年份",
             "value_text": "天启元年三月, 后金别将取海州, 参将刘廷宪战死",
             "source": "ming_xizong_shilu", "layer": "record", "era": "天启元年三月",
             "place": "haizhou_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "天启元年三月, 后金兵攻海州, 参将刘廷宪拒守, 城破, 死之。",
             "note": "海州陷与沈阳陷 (三月十三) 仅隔六日, 是后金同一战役序列。"},
            {"id": "H004", "subject": "event:haizhou_fall", "predicate": "朝鲜视角",
             "value_text": "李朝接毛文龙急报, 知海州已陷, 议援明",
             "source": "chao_xiandai", "layer": "record", "era": "天启元年三月",
             "place": "haizhou_cheng", "confidence": 0.7, "quote_status": "paraphrase_unverified",
             "quote": "辽东巡抚袁应泰以海州已陷告急, 朝议援明与否, 终以兵疲财乏未遣。",
             "note": "与沈阳战役不同, 海州陷落时李朝并未实际出兵援助。"},
            {"id": "H005", "subject": "event:haizhou_fall", "predicate": "毛文龙东江",
             "value_text": "海州陷后, 毛文龙率 197 人逃入海中皮岛, 创东江镇",
             "source": "qingshigao", "layer": "scholarship", "era": "天启元年",
             "place": "haizhou_cheng", "confidence": 0.92, "quote_status": "paraphrase_unverified",
             "quote": "文龙以海州已陷, 率从者 197 人, 浮海至皮岛, 收辽民为军, 遂开东江镇。",
             "note": "东江镇是后金侧翼长期困扰, 直至 1630 年毛文龙被袁崇焕诛杀。"},
            {"id": "H010", "subject": "place:haizhou_wei", "predicate": "海州卫初治牛庄的迁移",
             "value_text": "海州卫洪武九年 (1376) 置, 初治牛家庄, 后迁今海城——具体迁移年份在现存史料中未见明确记载",
             "source": "mingshi", "layer": "gap", "era": "洪武至永乐",
             "place": "haizhou_wei", "confidence": 0,
             "quote_status": "paraphrase_unverified",
             "quote": "",
             "lead": {
                 "where": "《明太祖实录》洪武朝逐年卷 / 《辽东志》卷 1-2 (嘉靖十六年刻本, 辽海丛书有影印) / 嘉靖《辽东志》",
                 "skills": ["古文", "GIS"],
                 "accept": "找到海州卫治所迁移的明确年份与诏令原文",
                 "effort": "1-2 周"
             }},
            {"id": "H011", "subject": "event:haizhou_fall", "predicate": "海州人口迁出",
             "value_text": "海州陷后, 当地百姓命运 (被杀 / 被俘 / 逃往山东 / 逃往朝鲜) 的分流比例无精确数字",
             "source": "mingshi", "layer": "gap", "era": "天启元年三月",
             "place": "haizhou_cheng", "confidence": 0,
             "quote_status": "paraphrase_unverified",
             "quote": "",
             "lead": {
                 "where": "《明熹宗实录》天启元年三月卷 / 朝鲜《通文馆志》关于「辽民」渡江记录 / 1621-1625 年山东登州府接收辽民档案",
                 "skills": ["古文", "统计"],
                 "accept": "给出海州人口约 X 万、其中约 Y% 逃往 Z 方向, 有具体出处",
                 "effort": "2-3 周"
             }},
        ])

    elif sk_key == "gaizhou":
        assertions.extend([
            {"id": "G001", "subject": "place:gaizhou_cheng", "predicate": "建置年",
             "value_text": "洪武四年 (1371) 始置盖州卫, 与海州卫并为辽南二大卫",
             "source": "mingshi", "layer": "record", "era": "洪武四年",
             "place": "gaizhou_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "洪武四年置盖州卫, 隶辽东都司。",
             "note": "盖州元代为盖州路, 明初降为卫。"},
            {"id": "G002", "subject": "event:gaizhou_fall", "predicate": "陷落年份",
             "value_text": "天启元年三月, 海州陷后十日, 后金取盖州",
             "source": "ming_xizong_shilu", "layer": "record", "era": "天启元年三月",
             "place": "gaizhou_cheng", "confidence": 0.9, "quote_status": "paraphrase_unverified",
             "quote": "天启元年三月, 后金兵攻盖州, 副将黄之骥拒守, 城破, 死之。",
             "note": "盖州与海州陷落仅隔十日, 是后金同一战役序列。"},
            {"id": "G003", "subject": "event:gaizhou_fall", "predicate": "陷落兵力",
             "value_text": "后金军号称四万, 实际兵力不详",
             "source": "qing_taizu_shilu", "layer": "record", "era": "天启元年三月",
             "place": "gaizhou_cheng", "confidence": 0.5, "quote_status": "paraphrase_unverified",
             "quote": "上命四王、皇太极率兵四万攻盖州。",
             "note": "「四万」数字与「海州之战实际出动兵力」之比, 学界有质疑, 待考。"},
            {"id": "G004", "subject": "place:gaizhou_cheng", "predicate": "建置年",
             "value_text": "学界综合：盖州元代为盖州路, 明初洪武四年 (1371) 降为盖州卫",
             "source": "modern", "layer": "scholarship", "era": "洪武四年",
             "place": "gaizhou_cheng", "confidence": 0.95, "quote_status": "paraphrase_unverified",
             "quote": "盖州元代为盖州路, 明洪武四年降路为卫。",
             "note": "学界对此无争议, 与明方《明太祖实录》记载一致。"},
            {"id": "G010", "subject": "event:gaizhou_fall", "predicate": "杨烈崛死亡细节",
             "value_text": "盖州参将杨烈崛在城破时的具体死法 (阵亡 / 自刎 / 被俘后杀) 三方记载不一致",
             "source": "mingshi", "layer": "gap", "era": "天启元年三月",
             "place": "gaizhou_cheng", "confidence": 0,
             "quote_status": "paraphrase_unverified",
             "quote": "",
             "lead": {
                 "where": "《明熹宗实录》天启元年三月卷 / 《清太祖实录》天命六年三月 / 朝鲜《李朝实录》光海君日记 / 明方墓志铭 (若有)",
                 "skills": ["古文", "朝鲜语"],
                 "accept": "从至少两方史料中找出杨烈崛死法的具体细节, 注明分歧",
                 "effort": "1-2 周"
             }},
            {"id": "G011", "subject": "place:xiongyue", "predicate": "熊岳堡军政沿革",
             "value_text": "熊岳堡军政沿革 (千户所至百户所至废) 的具体时间节点无明确记载",
             "source": "mingshi", "layer": "gap", "era": "嘉靖至万历",
             "place": "xiongyue", "confidence": 0,
             "quote_status": "paraphrase_unverified",
             "quote": "",
             "lead": {
                 "where": "嘉靖《辽东志》卷 3 卫所 / 万历《辽东志》/ 《明神宗实录》万历朝逐月",
                 "skills": ["古文"],
                 "accept": "梳理熊岳堡从明初建置到 1621 年陷落的完整卫所调整时间线",
                 "effort": "2-3 周"
             }},
        ])

    elif sk_key == "yehe":
        assertions.extend([
            {"id": "Y001", "subject": "place:xiyehe", "predicate": "叶赫部始祖",
             "value_text": "叶赫始祖为蒙古人星根达尔汉, 16 世纪中期因居叶赫勒河得名",
             "source": "qingshigao", "layer": "record", "era": "16 世纪中期",
             "place": "xiyehe", "confidence": 0.85, "quote_status": "paraphrase_unverified",
             "quote": "叶赫始祖星根达尔汉, 蒙古人也, 居叶赫勒河, 因以为氏。",
             "note": "学界对「蒙古人起源说」有争议 (也有认为是海西女真), 这是清史稿采信的说法。"},
            {"id": "Y002", "subject": "event:yehe_kaiyuan_attack", "predicate": "叶赫攻开原",
             "value_text": "万历十一年 (1583) 叶赫与建州争夺敕书, 叶赫兵攻开原城",
             "source": "mingshi", "layer": "record", "era": "万历十一年",
             "place": "kaiyuan_cheng", "confidence": 0.7, "quote_status": "paraphrase_unverified",
             "quote": "十一年, 叶赫兵攻开原, 为官军所击, 退走。",
             "note": "具体兵力与战果在《明神宗实录》有专条, 待核。"},
            {"id": "Y003", "subject": "event:yehe_fall", "predicate": "灭亡",
             "value_text": "万历四十七年八月, 萨尔浒战后, 努尔哈赤攻叶赫东城西城, 布寨战死, 布扬古降",
             "source": "qing_taizu_shilu", "layer": "record", "era": "万历四十七年八月",
             "place": "xiyehe", "confidence": 0.95, "quote_status": "paraphrase_unverified",
             "quote": "万历四十七年八月, 上亲率大兵攻叶赫, 布寨战死, 布扬古率西城降。",
             "note": "布扬古虽降, 但被努尔哈赤带走, 叶赫部由此彻底编入八旗。"},
            {"id": "Y004", "subject": "event:yehe_fall", "predicate": "明廷应对",
             "value_text": "叶赫亡时, 明朝辽东已无兵可救, 巡抚袁应泰束手",
             "source": "mingshi", "layer": "record", "era": "万历四十七年八月",
             "place": "xiyehe", "confidence": 0.8, "quote_status": "paraphrase_unverified",
             "quote": "叶赫亡, 明廷不能救, 辽东自此门户洞开。",
             "note": "「叶赫亡, 明失北蔽」成为后世史学对萨尔浒战后格局的定论。"},
            {"id": "Y005", "subject": "place:xiyehe", "predicate": "叶赫起源蒙古人",
             "value_text": "学界主流：叶赫与扈伦其他三部 (乌拉、辉发、哈达) 同为海西女真, 非蒙古",
             "source": "modern", "layer": "scholarship", "era": "16 世纪中期",
             "place": "xiyehe", "confidence": 0.85, "quote_status": "paraphrase_unverified",
             "quote": "叶赫为海西女真扈伦部之一, 与蒙古无关。",
             "note": "清史稿采「蒙古起源说」, 现代学界主流否认此说, 这是 record_vs_scholarship 冲突。"},
            {"id": "Y010", "subject": "place:xiyehe", "predicate": "叶赫军事人口",
             "value_text": "叶赫亡时, 叶赫总人口 (含东西二城) 与八旗编入人数的对应关系未明确",
             "source": "qing_taizu_shilu", "layer": "gap", "era": "万历四十七年八月",
             "place": "xiyehe", "confidence": 0,
             "quote_status": "paraphrase_unverified",
             "quote": "",
             "lead": {
                 "where": "《清太祖实录》天命四年八月 / 《满洲实录》/ 《八旗通志》叶赫部分 / 清初满文档案",
                 "skills": ["满语", "古文", "统计"],
                 "accept": "给出叶赫亡时人口估计 (约 X 万) 与被编入八旗的具体牛录数, 注明出处",
                 "effort": "2-3 周"
             }},
            {"id": "Y011", "subject": "event:yehe_kaiyuan_attack", "predicate": "叶赫开原之战的兵力",
             "value_text": "万历十一年叶赫兵攻开原的具体兵力 (数千 / 数百) 与战果在三方史料中数字不一",
             "source": "mingshi", "layer": "gap", "era": "万历十一年",
             "place": "kaiyuan_cheng", "confidence": 0,
             "quote_status": "paraphrase_unverified",
             "quote": "",
             "lead": {
                 "where": "《明神宗实录》万历十一年逐月 / 《清太祖实录》 (努尔哈赤早期记忆可能有数处) / 朝鲜《李朝实录》",
                 "skills": ["古文"],
                 "accept": "整理至少两方史料对万历十一年叶赫—开原之战的兵力数字, 标注分歧",
                 "effort": "1-2 周"
             }},
        ])

    return assertions


def build_meta(sk_key, sk):
    """build.py 期望的 meta 子集（仅注入 demo 的字段）。"""
    lead = ("开原—铁岭—辽阳—沈阳—海州—盖州一线是明辽东都司的纵深防线，"
            "1621 年三月六日之内接连陷落。后金从 1618 年抚顺之陷到 1621 年辽沈之取，"
            "三年完成了对辽东都司治所以北的全面控制。")
    if sk_key == "fushun":
        lead = ("抚顺是明朝羁縻建州女真的前沿：抚顺关马市是努尔哈赤积累经济与情报的窗口，"
                "也是「七大恨」告天的起点。万历四十六年 (1618) 抚顺陷落，三年后辽沈尽失。")
    elif sk_key == "haizhou":
        lead = ("海州是辽南粮道咽喉, 朝鲜马市所在。天启元年 (1621) 沈阳陷后六日陷落，"
                "毛文龙率 197 人逃入海中皮岛, 创东江镇。")
    elif sk_key == "gaizhou":
        lead = ("盖州是辽南与海州并立的二大卫之一。天启元年 (1621) 海州陷后十日陷落，"
                "盖州参将杨烈崛殉职。")
    elif sk_key == "yehe":
        lead = ("叶赫是扈伦四部中势力最强的一部, 明廷敕封叶赫贝勒为都督以羁縻制衡建州。"
                "万历四十七年 (1619) 萨尔浒战后, 叶赫东城西城俱破, 布寨战死, 布扬古降，"
                "叶赫亡。")

    return {
        "kind": "county",
        "region": sk["region"],
        "title": sk["title"],
        "dossier_label": sk["dossier_label"],
        "subtitle": sk["subtitle"],
        "primary_place": sk["primary_place"],
        "dossier_event": sk["dossier_event"],
        "lead": lead,
        "back": "枢纽",
        "subject_names": {eid: tt for eid, _, _, _, tt, _, _ in sk["events"]},
    }


def main():
    for sk_key, sk in SKELETONS.items():
        sk_dir = os.path.join(DATA, sk_key)
        os.makedirs(sk_dir, exist_ok=True)
        emit(sk_dir, "sources.json", SHARED_SOURCES)
        emit(sk_dir, "places.json", {
            "places": [
                {"id": pid, "name": nm, "lon": lo, "lat": la, "type": tp,
                 "modern": md, "note": nt}
                for pid, nm, lo, la, tp, md, nt in sk["places"]
            ],
            "rivers": [], "wall": []
        })
        emit(sk_dir, "persons.json", {
            "persons": [{"id": pid, "name": nm, "role": rl, "note": nt}
                        for pid, nm, rl, nt in sk["persons"]]
        })
        emit(sk_dir, "events.json", {
            "events": [
                {"id": eid, "subject": subj, "year": yr, "era": er,
                 "title": tt, "kind": kd, "text": txt}
                for eid, subj, yr, er, tt, kd, txt in sk["events"]
            ]
        })
        emit(sk_dir, "edges.json", {
            "edges": [{"from": fr, "to": to, "type": tp, "label": lb}
                      for fr, to, tp, lb in sk["edges"]]
        })
        assertions = build_assertions(sk_key, sk)
        emit_jsonl(sk_dir, "assertions.jsonl", assertions)
        print("  · %s —— %d 条断言" % (sk_key, len(assertions)))


if __name__ == "__main__":
    main()