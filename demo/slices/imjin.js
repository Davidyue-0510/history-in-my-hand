// 本文件由 tools/build.py 自动生成（切片 imjin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["imjin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["imjin"] = {
 "meta": {
  "kind": "county",
  "region": "imjin",
  "title": "万历朝鲜之役·壬辰倭乱",
  "dossier_label": "壬辰倭乱",
  "subtitle": "万历二十年—二十六年（1592—1598）· 明·朝鲜·日本三方",
  "primary_place": "pyongyang",
  "dossier_event": "event:pyongyang_battle",
  "vocab_pack": "ming_qing",
  "terrain_grid": "korea",
  "lead": "纵向+多方验证切片：同一条时间线横跨明/朝鲜/日本三方。朝鲜方=宣祖昭敬大王修正实录（亲历官修）；清方=明史·李如松传（清修叙明事，作者党派=清）；日本方=日本外史（江户赖山阳汉文私修，学界质疑其史料价值——这本身是立场素材）。三方对碧蹄馆明军伤亡的数字（朝鲜『八十余人』/明史『喪失甚多』/日本『斬首一万』）构成教科书级冲突对。真正明方自著（明神宗实录等）无免费全文→显式缺口。",
  "parties_note": "四桶立场：朝鲜（亲历官修）/ 清方（后朝官修叙明军战史）/ 日本方（后世私修，学界不认可其史料价值但立场=日本人叙述）/ 明方（缺口：明神宗实录万历二十·二十一年卷 ctext 验证码墙、万历三大征考/两朝平攘录 Wikisource 空页）。『明军』战史现由清修《明史》承担，不能冒充明方声音。",
  "subject_names": {
   "event:renchen_baofa": "壬辰倭乱爆发",
   "event:pyongyang_battle": "平壤之战",
   "event:bixieguan_battle": "碧蹄馆之战",
   "event:xingzhou_battle": "幸州山城之战",
   "event:cefeng_heyi": "明日和议册封破裂",
   "place:jinzhou": "晋州",
   "place:pyongyang": "平壤",
   "place:hanseong": "汉城",
   "place:bixieguan": "碧蹄馆",
   "place:xingzhou": "幸州山城",
   "person:xiuji": "丰臣秀吉",
   "person:li_rusong": "李如松",
   "person:quan_lyu": "权栗"
  },
  "page": "county.html?scene=imjin",
  "key": "imjin",
  "terrain_off_grid": true
 },
 "sources": [
  {
   "id": "xuanzong_shilu",
   "title": "宣祖昭敬大王修正实录（万历朝鲜之役卷）",
   "party": "朝鲜官方",
   "stance_label": "朝鲜官修·当代亲历",
   "distance_label": "光海朝重修（约1609年后），距事约10-17年；实录正文系事发时逐日记录",
   "color": "#2E86C1",
   "compiler": "朝鲜春秋馆（光海朝重修）",
   "period": "朝鲜·光海君朝",
   "stance": "official_contemporary",
   "note": "朝鲜官方实录（修正本）。亲历当事国立场，逐日记录；修正本系光海朝对宣祖朝的重修，带有光海朝政治重修色彩。来源：ko.wikisource（조선왕조실록/선조소경대왕수정실록/25·26년）"
  },
  {
   "id": "mingshi_juan238",
   "title": "明史·卷238（李成梁/李如松/麻贵传）",
   "party": "清修·明臣",
   "stance_label": "清修官史·记明事",
   "distance_label": "成书清乾隆四年（1739），距事约147年",
   "color": "#6C7A89",
   "compiler": "张廷玉等（清）",
   "period": "清",
   "stance": "official_later_dynasty",
   "note": "清修《明史》。作者党派=清（后朝官修前朝史），归清方桶——不能当明方声音。李如松传对成梁『掩败为功，杀良冒级』有清修史官的批判立场。来源：zh.wikisource 明史/卷238"
  },
  {
   "id": "riben_waishi_j16",
   "title": "日本外史·卷之十六（德川氏前記·豐臣氏中）",
   "party": "日本·后世修",
   "stance_label": "日本后世私修·汉文",
   "distance_label": "成书文政十年（1827），距事约235年",
   "color": "#A04000",
   "compiler": "赖山阳（日本江户末期）",
   "period": "日本·江户时代",
   "stance": "private_synthesis",
   "note": "日本后世私修史书（汉文）。立场=日本人如何讲这场战争。学界普遍不认可其史料价值（多虚构成分，如碧蹄馆『斩首一万』），但它是现存免费可得的日本方叙述，数字与朝鲜/明史差距极大，正是冲突对素材。来源：zh.wikisource 日本外史/卷之十六"
  }
 ],
 "places": [
  {
   "id": "pyongyang",
   "name": "平壤",
   "type": "city",
   "modern": "朝鲜平壤",
   "note": "平安道首府，平壤之战主战场",
   "lon": 125.75,
   "lat": 39.03,
   "geo_note": "朝鲜平安道首府，壬辰倭乱平壤之战主战场"
  },
  {
   "id": "hanseong",
   "name": "汉城",
   "type": "city",
   "modern": "韩国首尔",
   "note": "朝鲜都城，壬辰陷落",
   "lon": 126.98,
   "lat": 37.57,
   "geo_note": "朝鲜都城，壬辰倭乱陷落与收复"
  },
  {
   "id": "kaesong",
   "name": "开城",
   "type": "city",
   "modern": "朝鲜开城",
   "note": "李如柏收复",
   "lon": 126.55,
   "lat": 37.97,
   "geo_note": "朝鲜旧都，李如柏收复"
  },
  {
   "id": "bixieguan",
   "name": "碧蹄馆",
   "type": "yi",
   "modern": "韩国高阳",
   "note": "明军小挫处，三方伤亡数字分歧",
   "lon": 126.85,
   "lat": 37.6,
   "geo_note": "汉城西北驿，1593明军小挫处，三方伤亡数字分歧极大"
  },
  {
   "id": "xingzhou",
   "name": "幸州山城",
   "type": "fortress",
   "modern": "韩国高阳",
   "note": "权栗大捷处",
   "lon": 126.78,
   "lat": 37.63,
   "geo_note": "汉江西岸山城，权栗大败日军"
  },
  {
   "id": "busan",
   "name": "釜山",
   "type": "port",
   "modern": "韩国釜山",
   "note": "日军登陆点",
   "lon": 129.08,
   "lat": 35.18,
   "geo_note": "日军登陆点，郑泼战死"
  },
  {
   "id": "dongnae",
   "name": "东莱",
   "type": "city",
   "modern": "韩国釜山东莱",
   "note": "宋象贤死节处",
   "lon": 129.09,
   "lat": 35.2,
   "geo_note": "釜山北，府使宋象贤死节"
  },
  {
   "id": "uiju",
   "name": "义州",
   "type": "city",
   "modern": "朝鲜新义州一带",
   "note": "宣祖行在所",
   "lon": 124.4,
   "lat": 40.1,
   "geo_note": "鸭绿江南岸，宣祖行在所"
  },
  {
   "id": "anzhou",
   "name": "安州",
   "type": "city",
   "modern": "朝鲜安州",
   "note": "宋应昌驻军处",
   "lon": 125.66,
   "lat": 39.62,
   "geo_note": "平壤北，宋应昌驻军处"
  },
  {
   "id": "shunan",
   "name": "顺安",
   "type": "yi",
   "modern": "朝鲜平壤北",
   "note": "李如松屯兵处",
   "lon": 125.65,
   "lat": 39.05,
   "geo_note": "平壤北，李如松屯兵处"
  },
  {
   "id": "jinzhou",
   "name": "晋州",
   "type": "city",
   "modern": "韩国晋州",
   "note": "晋州城陷，金千镒等死之",
   "lon": 128.11,
   "lat": 35.19,
   "geo_note": "1593晋州城陷，金千镒等死之"
  },
  {
   "id": "zhongzhou",
   "name": "忠州",
   "type": "city",
   "modern": "韩国忠州",
   "note": "申砬败死处",
   "lon": 127.93,
   "lat": 36.99,
   "geo_note": "申砬败死处"
  },
  {
   "id": "shangzhou",
   "name": "尚州",
   "type": "city",
   "modern": "韩国尚州",
   "note": "李镒兵溃处",
   "lon": 128.16,
   "lat": 36.34,
   "geo_note": "李镒兵溃处"
  },
  {
   "id": "longren",
   "name": "龙仁",
   "type": "city",
   "modern": "韩国龙仁",
   "note": "三道兵溃处",
   "lon": 127.2,
   "lat": 37.24,
   "geo_note": "三道兵溃处"
  },
  {
   "id": "pozhou",
   "name": "坡州",
   "type": "city",
   "modern": "韩国坡州",
   "note": "李如松退屯处",
   "lon": 126.75,
   "lat": 37.83,
   "geo_note": "李如松退屯处"
  },
  {
   "id": "tsushima",
   "name": "对马",
   "type": "island",
   "modern": "日本对马岛",
   "note": "日军出发前哨",
   "lon": 129.3,
   "lat": 34.27,
   "geo_note": "日军出发前哨，宗义智/平义智领地"
  },
  {
   "id": "nagoya",
   "name": "名护屋",
   "type": "base",
   "modern": "日本佐贺县",
   "note": "秀吉征朝本营",
   "lon": 129.95,
   "lat": 33.45,
   "geo_note": "肥前，秀吉征朝本营"
  },
  {
   "id": "liaodong",
   "name": "辽东",
   "type": "region",
   "modern": "中国辽宁",
   "note": "明军入援出发地",
   "lon": 123.43,
   "lat": 41.8,
   "geo_note": "唐安东都护府，今辽宁辽阳"
  }
 ],
 "persons": [
  {
   "id": "li_rusong",
   "name": "李如松",
   "role": "明提督蓟辽保定山东诸军",
   "note": "平壤大捷，碧蹄馆小挫后力主和议",
   "influence": 0
  },
  {
   "id": "song_yingchang",
   "name": "宋应昌",
   "role": "明经略",
   "note": "主和，遣沈惟敬入倭营议和",
   "influence": 0
  },
  {
   "id": "shen_weijing",
   "name": "沈惟敬",
   "role": "明游击·议和使",
   "note": "往来明倭之间议和，后获罪",
   "influence": 0
  },
  {
   "id": "zu_chengxun",
   "name": "祖承训",
   "role": "明副总兵",
   "note": "平壤初战先败，后诈为韩装助破平壤",
   "influence": 0
  },
  {
   "id": "zha_dashou",
   "name": "查大受",
   "role": "明游击/参将",
   "note": "碧蹄馆殿后，幸州战后叹权栗为真将军",
   "influence": 0
  },
  {
   "id": "liu_chengryong",
   "name": "柳成龙",
   "role": "朝鲜领议政",
   "note": "亲历壬辰，掌粮草联络，力劝李如松勿轻退",
   "influence": 0
  },
  {
   "id": "quan_lyu",
   "name": "权栗",
   "role": "朝鲜全罗巡察使",
   "note": "幸州山城大捷，宣祖嘉之",
   "influence": 0
  },
  {
   "id": "xuanzu",
   "name": "宣祖李昖",
   "role": "朝鲜国王",
   "note": "汉城陷前西幸义州",
   "influence": 0
  },
  {
   "id": "xiuji",
   "name": "丰臣秀吉",
   "role": "日本关白",
   "note": "出兵朝鲜，欲假道伐明；后裂册毁冕，和议破裂",
   "influence": 2
  },
  {
   "id": "xiaoxi_hangzhang",
   "name": "小西行长",
   "role": "日军第二军主将",
   "note": "平壤守将，战败踏冰渡江而走",
   "influence": 0
  },
  {
   "id": "jiateng_qingzheng",
   "name": "加藤清正",
   "role": "日军第一军主将",
   "note": "北进咸镜，后与行长不睦",
   "influence": 0
  },
  {
   "id": "xiaozhaochuan_longjing",
   "name": "小早川隆景",
   "role": "日军碧蹄馆主将",
   "note": "以三万人邀击明军于碧蹄馆",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "IJ001",
   "subject": "event:renchen_baofa",
   "predicate": "日军登陆",
   "value_text": "四月十四日倭贼大举入寇，陷釜山镇，郑泼战死；陷东莱府，宋象贤死之",
   "time": {
    "era_text": "万历二十年四月",
    "start": "1592-04-14",
    "end": "1592-04-14",
    "gregorian_year": 1592
   },
   "place": "busan",
   "source": "xuanzong_shilu",
   "quote": "倭賊大擧入寇，陷釜山鎭，僉使鄭潑戰死；陷東萊府，府使宋象賢死之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "IJ002",
   "subject": "event:renchen_baofa",
   "predicate": "汉城陷落",
   "value_text": "五月三日倭入京城，宣祖已先西幸，至义州",
   "time": {
    "era_text": "万历二十年五月",
    "start": "1592-05-03",
    "end": "1592-05-03",
    "gregorian_year": 1592
   },
   "place": "hanseong",
   "source": "xuanzong_shilu",
   "quote": "是月初三日，倭入京城……上出敦義門西行……上至義州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "empire",
   "note": "",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "IJ003",
   "subject": "person:xiuji",
   "predicate": "出兵兵力",
   "value_text": "秀吉发诸岛兵二十万，船四五万艘",
   "time": {
    "era_text": "万历二十年",
    "start": "1592-04-01",
    "end": "1592-12-31",
    "gregorian_year": 1592
   },
   "place": "busan",
   "source": "xuanzong_shilu",
   "quote": "平秀吉以我國不許借途，遂發諸島兵二十萬……船四五萬艘，蔽海而來",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "朝鲜官方记载日军二十万（冲突C 成员）",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "IJ004",
   "subject": "person:xiuji",
   "predicate": "出兵兵力",
   "value_text": "水陆九军，总十五万人",
   "time": {
    "era_text": "文禄元年",
    "start": "1592-04-01",
    "end": "1592-12-31",
    "gregorian_year": 1592
   },
   "place": "nagoya",
   "source": "riben_waishi_j16",
   "quote": "水陸九軍。總十五萬人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "empire",
   "note": "日本后世史书载十五万（冲突C 成员）；学界对日本外史史料价值有疑",
   "_party": "日本·后世修",
   "_faction": null
  },
  {
   "id": "IJ005",
   "subject": "event:pyongyang_battle",
   "predicate": "战役损失",
   "value_text": "攻破七星门，斩获一千二百八十余级，烧杀过半",
   "time": {
    "era_text": "万历二十一年正月初八",
    "start": "1593-01-08",
    "end": "1593-01-08",
    "gregorian_year": 1593
   },
   "place": "pyongyang",
   "source": "xuanzong_shilu",
   "quote": "斬獲一千二百八十餘名，燒殺亦過半",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "朝鲜记平壤之战明军斩获（冲突A 成员）",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "IJ006",
   "subject": "event:pyongyang_battle",
   "predicate": "战役损失",
   "value_text": "李如松亲督大军克平壤，获首功千二百有奇",
   "time": {
    "era_text": "万历二十一年正月",
    "start": "1593-01-01",
    "end": "1593-01-31",
    "gregorian_year": 1593
   },
   "place": "pyongyang",
   "source": "mingshi_juan238",
   "quote": "如松親提大軍直抵城下……遂克之。獲首功千二百有奇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "清修明史载明军首级数（冲突A 成员）",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "IJ007",
   "subject": "event:pyongyang_battle",
   "predicate": "战役损失",
   "value_text": "明军死伤数千不能拔，行长自率众踏冰渡江而走",
   "time": {
    "era_text": "文禄二年正月",
    "start": "1593-01-01",
    "end": "1593-01-31",
    "gregorian_year": 1593
   },
   "place": "pyongyang",
   "source": "riben_waishi_j16",
   "quote": "明軍死傷數千人。不能拔……行長……潛率衆出城。至江。江冰方合。踏而渡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "theater",
   "note": "日本方称明军伤亡数千（冲突A 成员）；与朝鲜『烧杀过半』并列，谁损失多少说法迥异",
   "_party": "日本·后世修",
   "_faction": null
  },
  {
   "id": "IJ008",
   "subject": "event:bixieguan_battle",
   "predicate": "明军伤亡",
   "value_text": "李有升及勇士八十余人被砍死，查大受殿后夺路而出",
   "time": {
    "era_text": "万历二十一年正月二十七",
    "start": "1593-01-27",
    "end": "1593-01-27",
    "gregorian_year": 1593
   },
   "place": "bixieguan",
   "source": "xuanzong_shilu",
   "quote": "提督麾下李有升及勇士八十餘人被砍死，提督使査大受殿後，奪路而出",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "theater",
   "note": "朝鲜记碧蹄馆明军死80余人（冲突B 成员）",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "IJ009",
   "subject": "event:bixieguan_battle",
   "predicate": "明军伤亡",
   "value_text": "猝遇倭围数重，官军丧失甚多，退驻开城",
   "time": {
    "era_text": "万历二十一年正月二十七",
    "start": "1593-01-27",
    "end": "1593-01-27",
    "gregorian_year": 1593
   },
   "place": "bixieguan",
   "source": "mingshi_juan238",
   "quote": "猝遇倭，圍數重……官軍喪失甚多……官軍乃退駐開城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "清修明史不载具体数字（冲突B 成员）",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "IJ010",
   "subject": "event:bixieguan_battle",
   "predicate": "明军伤亡",
   "value_text": "隆景以三万人邀击，大破明军，斩首一万，几获如松",
   "time": {
    "era_text": "文禄二年正月",
    "start": "1593-01-01",
    "end": "1593-01-31",
    "gregorian_year": 1593
   },
   "place": "bixieguan",
   "source": "riben_waishi_j16",
   "quote": "隆景以三萬人。邀擊于碧蹄館……遂大破明軍。斬首一萬。殆獲如松",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.3,
   "scale": "theater",
   "note": "日本方称斩首一万（冲突B 成员）；学界多认为虚构成分大，与朝鲜『八十余人』差距悬殊——教科书级数字分歧",
   "_party": "日本·后世修",
   "_faction": null
  },
  {
   "id": "IJ011",
   "subject": "event:xingzhou_battle",
   "predicate": "战果",
   "value_text": "权栗以四千兵据幸州山城，击退数万日军",
   "time": {
    "era_text": "万历二十一年二月",
    "start": "1593-02-01",
    "end": "1593-02-28",
    "gregorian_year": 1593
   },
   "place": "xingzhou",
   "source": "xuanzong_shilu",
   "quote": "權慄……分抄精兵四千……陣于幸州山上……賊悉衆數萬，乘曉圍柵……自卯至酉……賊遂敗退",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "theater",
   "note": "朝鲜大捷，宣祖传旨嘉奖『朕甚嘉之』",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "IJ012",
   "subject": "event:bixieguan_battle",
   "predicate": "退兵理由",
   "value_text": "李如松密奏汉城贼兵二十万众寡不敌，引疾辞退",
   "time": {
    "era_text": "万历二十一年正月末",
    "start": "1593-01-27",
    "end": "1593-02-15",
    "gregorian_year": 1593
   },
   "place": "hanseong",
   "source": "xuanzong_shilu",
   "quote": "提督以此，憚於進取，密奏：『漢城賊兵二十萬，衆寡不敵。』且引疾辭職",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "theater",
   "note": "实录载李如松奏报口径，『憚於進取』系史官对退兵动机的定性，故列 scholarship 层",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "IJ013",
   "subject": "event:cefeng_heyi",
   "predicate": "和议进程",
   "value_text": "碧蹄败后沈惟敬款议复行，四月十八日倭弃王京遁",
   "time": {
    "era_text": "万历二十一年四月",
    "start": "1593-04-18",
    "end": "1593-04-18",
    "gregorian_year": 1593
   },
   "place": "hanseong",
   "source": "mingshi_juan238",
   "quote": "及碧蹄敗衄，如鬆氣大索……惟敬款議復行。四月十八日，倭棄王京遁，如松與應昌入城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "清修明史：和议与日军撤王京并行",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "IJ014",
   "subject": "event:cefeng_heyi",
   "predicate": "册封结果",
   "value_text": "读册至『封尔为日本国王』，秀吉变色裂册毁冕",
   "time": {
    "era_text": "庆长元年九月",
    "start": "1596-09-02",
    "end": "1596-09-02",
    "gregorian_year": 1596
   },
   "place": "",
   "source": "riben_waishi_j16",
   "quote": "讀冊于秀吉之傍，至曰封爾爲日本國王。秀吉變色。立脫冕服拋之地。取冊書扯裂之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "empire",
   "note": "日本方记载册封破裂场景（史实框架可信，细节带文学性）",
   "_party": "日本·后世修",
   "_faction": null
  },
  {
   "id": "IJ015",
   "subject": "place:jinzhou",
   "predicate": "城陷",
   "value_text": "倭将合兵攻晋州，诸将畏贼不救，金千镒崔庆会死之",
   "time": {
    "era_text": "万历二十一年六月",
    "start": "1593-06-01",
    "end": "1593-06-30",
    "gregorian_year": 1593
   },
   "place": "jinzhou",
   "source": "xuanzong_shilu",
   "quote": "倭賊陷晋州，金千鎰、崔慶會等死之……諸將畏賊勢，大不敢進",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "theater",
   "note": "朝鲜记明军诸将坐视晋州之陷",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "IJ016",
   "subject": "event:bixieguan_battle",
   "predicate": "明方自著缺口",
   "value_text": "",
   "time": {
    "era_text": "万历二十一年",
    "start": "1593-01-01",
    "end": "1593-12-31",
    "gregorian_year": 1593
   },
   "place": "",
   "source": "mingshi_juan238",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "真正明方当事人自著（明神宗实录万历二十/二十一年卷、万历三大征考、两朝平攘录）均无免费全文；现明军战史由清修《明史》承担（清方桶）",
   "lead": {
    "where": "明方当事人对平壤/碧蹄馆的自述",
    "skills": [
     "抓取明神宗实录万历二十、二十一年卷（ctext 有验证码墙，需人工）",
     "找万历三大征考/两朝平攘录电子版"
    ],
    "accept": "引入真正明方桶断言，三方分桶完整"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "IJ017",
   "subject": "event:bixieguan_battle",
   "predicate": "伤亡数字核验",
   "value_text": "",
   "time": {
    "era_text": "万历二十一年",
    "start": "1593-01-01",
    "end": "1593-12-31",
    "gregorian_year": 1593
   },
   "place": "bixieguan",
   "source": "xuanzong_shilu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "碧蹄馆明军伤亡：朝鲜『八十余人』/明史『喪失甚多』/日本外史『斬首一万』——三方差距过大，需逐日核对",
   "lead": {
    "where": "碧蹄馆之战明军真实伤亡",
    "skills": [
     "核对宣祖实录正月二十七至二月逐日条",
     "比对明军将领奏报（辽东奏报档）"
    ],
    "accept": "把三方数字差距收敛到可解释的区间"
   },
   "_party": "朝鲜官方",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:person:xiuji|出兵兵力",
   "subject": "person:xiuji",
   "predicate": "出兵兵力",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "IJ003",
    "IJ004"
   ]
  },
  {
   "id": "cf:event:pyongyang_battle|战役损失",
   "subject": "event:pyongyang_battle",
   "predicate": "战役损失",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "IJ005",
    "IJ006",
    "IJ007"
   ]
  },
  {
   "id": "cf:event:bixieguan_battle|明军伤亡",
   "subject": "event:bixieguan_battle",
   "predicate": "明军伤亡",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "IJ008",
    "IJ009",
    "IJ010"
   ]
  }
 ],
 "gaps": [
  "IJ016",
  "IJ017"
 ],
 "events": [
  {
   "id": "ev_renchen_baofa",
   "subject": "event:renchen_baofa",
   "year": 1592,
   "era": "万历二十年·壬辰",
   "title": "壬辰倭乱爆发",
   "kind": "战事",
   "text": "1592年四月，日军登陆釜山，东莱陷，汉城陷，宣祖西幸义州。"
  },
  {
   "id": "ev_pyongyang_battle",
   "subject": "event:pyongyang_battle",
   "year": 1593,
   "era": "万历二十一年正月",
   "title": "平壤之战",
   "kind": "战事",
   "text": "1593年正月，李如松率明军收复平壤，小西行长踏冰渡大同江遁走。三方对损失数字记载悬殊。"
  },
  {
   "id": "ev_bixieguan_battle",
   "subject": "event:bixieguan_battle",
   "year": 1593,
   "era": "万历二十一年正月末",
   "title": "碧蹄馆之战",
   "kind": "战事",
   "text": "1593年正月二十七，李如松轻骑趋碧蹄馆遇伏，明军小挫退开城。朝鲜记李有升等八十余人死，明史云丧失甚多，日本外史云斩首一万——三方数字分歧教科书级。"
  },
  {
   "id": "ev_xingzhou_battle",
   "subject": "event:xingzhou_battle",
   "year": 1593,
   "era": "万历二十一年二月",
   "title": "幸州山城之战",
   "kind": "战事",
   "text": "1593年二月，权栗以四千精兵据幸州山城，击退数万日军，朝鲜大捷。"
  },
  {
   "id": "ev_cefeng_heyi",
   "subject": "event:cefeng_heyi",
   "year": 1596,
   "era": "万历二十四年·庆长元年",
   "title": "明日和议册封破裂",
   "kind": "外交",
   "text": "1596年明使册封秀吉为日本国王，秀吉裂册毁冕，和议破裂，再度出兵。"
  }
 ],
 "edges": [
  {
   "from": "nagoya",
   "to": "tsushima",
   "type": "military",
   "label": "名护屋—对马（日军渡海前哨）"
  },
  {
   "from": "tsushima",
   "to": "busan",
   "type": "military",
   "label": "对马—釜山（日军登陆路）"
  },
  {
   "from": "busan",
   "to": "dongnae",
   "type": "military",
   "label": "釜山—东莱（登陆首战）"
  },
  {
   "from": "liaodong",
   "to": "uiju",
   "type": "reinforcement",
   "label": "辽东—义州（明军入援路）"
  },
  {
   "from": "uiju",
   "to": "anzhou",
   "type": "reinforcement",
   "label": "义州—安州（明军南下）"
  },
  {
   "from": "anzhou",
   "to": "pyongyang",
   "type": "reinforcement",
   "label": "安州—平壤（平壤之战）"
  },
  {
   "from": "pyongyang",
   "to": "kaesong",
   "type": "reinforcement",
   "label": "平壤—开城（明军东进）"
  },
  {
   "from": "kaesong",
   "to": "bixieguan",
   "type": "military",
   "label": "开城—碧蹄馆（明军前出遇伏）"
  },
  {
   "from": "bixieguan",
   "to": "hanseong",
   "type": "military",
   "label": "碧蹄馆—汉城（距王京三十里）"
  },
  {
   "from": "bixieguan",
   "to": "xingzhou",
   "type": "battle",
   "label": "碧蹄馆—幸州（权栗侧翼大捷）"
  }
 ]
};
