// 本文件由 tools/build.py 自动生成（切片 dunhuang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dunhuang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dunhuang"] = {
 "meta": {
  "kind": "county",
  "region": "xibei",
  "province": "gansu",
  "title": "敦煌（丝路咽喉·莫高窟·河西走廊西端）",
  "dossier_label": "敦煌",
  "subtitle": "丝路咽喉 · 莫高窟 · 河西走廊西端 · 藏经洞",
  "primary_place": "mogaoku",
  "dossier_event": "event:ev_dunhuang_02",
  "vocab_pack": "dunhuang",
  "terrain_grid": "china_coarse",
  "lead": "敦煌居河西走廊西端绿洲，党河浸润、大漠环绕，为丝绸之路南北道分岔之咽喉。汉武帝元鼎六年（前111）置敦煌郡，为河西四郡之一，西控西域、南通羌中；前秦建元二年（366）沙门乐僔于三危山麓凿莫高窟第一窟，千年营缮成世界规模最巨的佛教石窟艺术宝库（1987年列入UNESCO 440，现存洞窟四百余、壁画约4.5万㎡、彩塑两千余尊）；清光绪二十六年（1900）王圆箓发现藏经洞，出土汉、藏、粟特、于阗、回鹘、希伯来等多语写本数万件，敦煌学由是兴。唐中叶后吐蕃据有、张曹归义军继起，胡汉诸族共治；玉门、阳两关扼丝路北南道，为汉长城西端锁钥。",
  "parties_note": "史料以汉书/史记/旧唐书等官修为主，敦煌石窟与文书文献为现代学界研究，系统不裁决，只并列。",
  "subject_names": {
   "event:ev_dunhuang_01": "汉武帝设郡",
   "event:ev_dunhuang_02": "乐僔开窟",
   "event:ev_dunhuang_03": "藏经洞发现",
   "place:mogaoku": "莫高窟",
   "person:wang_yuanlu": "王圆箓"
  },
  "epoch": "cross_dynastic",
  "scale_tier": "operational",
  "strategic": {
   "political_cohesion": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     3,
     5
    ],
    "layer": "inference",
    "note": "敦煌郡建制+佛教东传+多元宗教→绿洲文明秩序"
   },
   "material_logistics": {
    "from": [
     "tech",
     "economy"
    ],
    "from_dims": [
     2,
     1
    ],
    "layer": "inference",
    "note": "石窟营造+绿洲灌溉+丝路贸易→敦煌物资与艺术枢纽"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4,
     5
    ],
    "layer": "inference",
    "note": "胡汉商僧+多族文献+敦煌学→多元社会与知识网络"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "河西走廊西端+丝路分岔+设郡/藏经洞事件→敦煌控东西交流咽喉"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=dunhuang",
  "key": "dunhuang",
  "scene_id": "dunhuang"
 },
 "sources": [
  {
   "id": "shiji",
   "title": "史记",
   "party": "汉·官修",
   "stance_label": "汉人当代/近当代",
   "distance_label": "成书汉武帝时，距楚汉约百年",
   "color": "#B23A48",
   "compiler": "司马迁（西汉）",
   "period": "汉",
   "note": "河西、大宛诸传载汉武帝开河西、通西域之背景，为敦煌设郡之纬。"
  },
  {
   "id": "hanshu",
   "title": "汉书",
   "party": "汉·后朝官修",
   "stance_label": "汉后朝官修",
   "distance_label": "成书东汉明帝—章帝时，距楚汉约二百余年",
   "color": "#C0584F",
   "compiler": "班固（东汉）",
   "period": "汉",
   "note": "地理志、西域传载敦煌郡建置与两关、丝路南北道，为敦煌设郡核心史料。"
  },
  {
   "id": "jiu_tangshu",
   "title": "旧唐书",
   "party": "五代·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书后晋开运二年（945），距事约130年",
   "color": "#7A6A53",
   "compiler": "刘昫等（后晋）",
   "period": "五代",
   "note": "吐蕃传、地理志载沙州陷蕃与归义军事，为敦煌多元政权核心史料。"
  },
  {
   "id": "dunhuang_wenxian",
   "title": "敦煌石窟与文书文献",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "敦煌学（石窟考古·藏经洞文书）综合研究",
   "period": "今",
   "note": "莫高窟记、石窟考古报告与藏经洞写本研究综述，用于莫高窟开凿、艺术与藏经洞等断言。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "敦煌历史地理与丝路文明综合研究",
   "period": "今",
   "note": "历史地理、丝路史、宗教史等现代研究的综合推论，用于 inference 与 gap 层。"
  }
 ],
 "places": [
  {
   "id": "dunhuang_city",
   "name": "敦煌城（沙州绿洲·党河）",
   "lon": 40.14,
   "lat": 94.66,
   "type": "城/绿洲",
   "modern": "甘肃省敦煌市",
   "note": "河西走廊西端绿洲，党河浸润、大漠环绕，汉置敦煌郡、唐为沙州，处丝绸之路南北道分岔之咽喉。",
   "geo_match": "approx",
   "geo_note": "敦煌城中心近似坐标（40.14, 94.66），取自公开地理数据，待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "mogaoku",
   "name": "莫高窟",
   "lon": 40.035,
   "lat": 94.805,
   "type": "石窟寺/文化遗产",
   "modern": "敦煌市东南25公里三危山麓",
   "note": "前秦建元二年（366）乐僔始凿，现存洞窟四百余、壁画约4.5万㎡、彩塑两千余尊，1987年列入UNESCO世界遗产（编号440）。",
   "geo_match": "approx",
   "geo_note": "莫高窟近似坐标（40.035, 94.805），取自公开地理数据，待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "dachuan_river",
   "name": "大泉河（宕泉）",
   "lon": 40.04,
   "lat": 94.81,
   "type": "河流",
   "modern": "莫高窟前",
   "note": "宕泉河，莫高窟崖壁前一线流润，供窟区营缮与僧团汲饮，绿洲水利支撑石窟千年延续。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "mingsha_shan",
   "name": "鸣沙山·月牙泉",
   "lon": 40.0,
   "lat": 94.68,
   "type": "沙漠/泉",
   "modern": "敦煌市南郊",
   "note": "鸣沙山环抱月牙泉，沙泉共生、荒漠绿洲奇观，为敦煌意象之标志性地景。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "yangguan",
   "name": "阳关",
   "lon": 40.07,
   "lat": 94.3,
   "type": "关隘/遗址",
   "modern": "敦煌市西南古董滩",
   "note": "汉长城西端关隘，扼丝绸之路南道，与玉门关并峙，「西出阳关无故人」之所指。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "yumen_guan",
   "name": "玉门关",
   "lon": 40.36,
   "lat": 93.87,
   "type": "关隘/遗址",
   "modern": "敦煌市西北小方盘城",
   "note": "汉长城西端关隘，扼丝绸之路北道，「春风不度玉门关」之所指，锁钥西域、中原西陲象征。",
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "yue_zun",
   "name": "乐僔",
   "era": "前秦",
   "role": "莫高窟开凿者",
   "note": "前秦建元二年（366）行至三危山，见金光如千佛，遂凿莫高窟第一窟，千年石窟艺术宝库肇端。",
   "influence": 0
  },
  {
   "id": "wang_yuanlu",
   "name": "王圆箓",
   "era": "清—近代",
   "role": "藏经洞发现者",
   "note": "清光绪二十六年（1900）于莫高窟第17窟发现藏经洞，出土多语写本数万件，敦煌学由是兴。",
   "influence": 0
  },
  {
   "id": "chang_shuhong",
   "name": "常书鸿",
   "era": "现代",
   "role": "敦煌艺术研究所创办者",
   "note": "1944年筹办国立敦煌艺术研究所（今敦煌研究院），毕生守护临摹莫高窟，奠定敦煌保护与研究基石。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "DH_R01",
   "subject": "event:ev_dunhuang_01",
   "predicate": "汉武帝设敦煌郡，控河西走廊西端",
   "value_text": "汉武帝元鼎六年（前111）分酒泉郡置敦煌郡，为河西四郡之一，扼丝路南北道之分岔，西控西域、南通羌中。",
   "value": "",
   "source": "shiji",
   "layer": "record",
   "era": "西汉",
   "place": "dunhuang_city",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "汉武开河西，列四郡、据两关，敦煌处其西垂，南北道于此分镳，商旅使命之所凑（《史记·大宛列传》/ 河渠书）。",
   "note": "事件（设郡）+ 制度（河西四郡）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "DH_R02",
   "subject": "event:ev_dunhuang_02",
   "predicate": "乐僔开凿莫高窟第一窟，佛教石窟艺术始",
   "value_text": "前秦建元二年（366）沙门乐僔于三危山麓凿窟修行，莫高窟由此始营，千年石窟艺术宝库肇端。",
   "value": "",
   "source": "dunhuang_wenxian",
   "layer": "record",
   "era": "前秦",
   "place": "mogaoku",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "乐僔行至三危，见金光如千佛，遂架空凿岩，造窟一龛，莫高之兴实始于此（莫高窟记/ 敦煌石窟文献）。",
   "note": "事件（开窟）+ 技术（石窟营造）。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_R03",
   "subject": "event:ev_dunhuang_03",
   "predicate": "藏经洞发现，数万写本震动学界",
   "value_text": "清光绪二十六年（1900）道士王圆箓于莫高窟第17窟发现藏经洞，出土汉、藏、粟特、于阗、回鹘、希伯来等多语写本数万件，敦煌学由是兴。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "清—近代",
   "place": "mogaoku",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "光绪末，窟壁豁然见藏室，缣素盈数万，诸国文字并陈，寰宇震惊，敦煌之学遂为显学（敦煌文献研究/ 近代记述）。",
   "note": "事件（藏经洞）+ 思想（敦煌学）。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_R04",
   "subject": "place:dunhuang_city",
   "predicate": "敦煌处绿洲，为丝路南北道分岔中继",
   "value_text": "敦煌居河西走廊西端绿洲，党河浸润、大漠环绕，为丝绸之路南北两道分岔之咽喉，东西贸易与宗教文化之交会。",
   "value": "",
   "source": "hanshu",
   "layer": "record",
   "era": "汉—唐",
   "place": "dunhuang_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "敦煌，西度流沙，南北道分，贾胡释侣往来如织，一隅而关天下脉络（汉书西域传/ 沙州图经）。",
   "note": "地理（绿洲丝路）+ 社会（交流中继）。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "DH_R05",
   "subject": "place:mogaoku",
   "predicate": "莫高窟现存数百窟、壁画彩塑冠绝于世",
   "value_text": "莫高窟现存洞窟四百余、壁画约四万五千平方米、彩塑两千余尊，跨北朝至元千余年，为世界规模最巨、延续最久的佛教艺术宝库。",
   "value": "",
   "source": "dunhuang_wenxian",
   "layer": "record",
   "era": "北朝—元",
   "place": "mogaoku",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "今存窟四百九十余，壁画四万五千余方，彩塑两千余躯，自四世纪逮元，营缮不绝，宇内罕俪（敦煌石窟文献/ 莫高窟考古）。",
   "note": "技术（壁画彩塑）+ 思想（佛教艺术）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_R06",
   "subject": "place:dunhuang_city",
   "predicate": "吐蕃、归义军、曹氏先后据敦煌，多元政权叠替",
   "value_text": "唐中叶后吐蕃据有敦煌，继以张氏归义军、曹氏瓜沙政权，绿洲政权屡易其主，汉、吐蕃、粟特、回鹘诸族共治。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐—五代",
   "place": "dunhuang_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "吐蕃既陷河西，沙州归其羁；张曹继起，号归义军，胡汉错处，号令自擅（旧唐书·吐蕃传/ 张氏勋德记）。",
   "note": "制度（绿洲政权）+ 社会（多族共治）。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "DH_S01",
   "subject": "place:mogaoku",
   "predicate": "莫高窟艺术融汉、印度、犍陀罗、吐蕃诸风",
   "value_text": "莫高窟壁画与彩塑集汉地线描、印度凹凸、犍陀罗造像、吐蕃与回鹘风格于一壁，为东西艺术融合之实证。",
   "value": "",
   "source": "dunhuang_wenxian",
   "layer": "scholarship",
   "era": "北朝—元",
   "place": "mogaoku",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "丹青之工，兼采梵汉，凹凸晕染与铁线描并施，诸族画风同壁，学者以为丝路艺术交融之范（敦煌艺术研究）。",
   "note": "技术（壁画）+ 思想（艺术融合）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_S02",
   "subject": "place:dunhuang_city",
   "predicate": "藏经洞多语写本见丝路宗教与族群交汇",
   "value_text": "藏经洞所出写本兼及汉、藏、粟特、于阗、回鹘、希伯来等文字，佛、道、景教、摩尼、祆教经典并存，见敦煌为多元宗教与族群交汇之地。",
   "value": "",
   "source": "modern",
   "layer": "scholarship",
   "era": "唐—宋",
   "place": "dunhuang_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "藏室之简，梵汉蕃回并陈，释老景摩诸典俱出，一隅而备殊俗之文，丝路文明之汇于此可见（敦煌文献研究）。",
   "note": "思想（多元宗教）+ 社会（多族文献）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_S03",
   "subject": "place:dunhuang_city",
   "predicate": "归义军时期绿洲农商与水利自成体系",
   "value_text": "归义军时期敦煌以党河灌溉营绿洲农业，营田、渠务、市易皆有成法，胡汉聚落依水而聚。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "scholarship",
   "era": "唐—五代",
   "place": "dunhuang_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "沙州之田，仰党河之溉，渠堰有制，营田市易各有司存，塞上绿洲赖以不隳（旧唐书/ 沙州地志）。",
   "note": "社会（绿洲农商）+ 地理（水利）。",
   "dims": [
    4,
    1
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "DH_I01",
   "subject": "place:dachuan_river",
   "predicate": "大泉河（宕泉）润莫高窟，绿洲水利支撑营窟",
   "value_text": "莫高窟前大泉河（宕泉）一线流润，既供窟区营缮与僧团汲饮，亦见绿洲水利对石窟千年延续的支撑。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "北朝—元",
   "place": "dachuan_river",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "宕泉一线，瀦而为润，凿窟者资其水，僧徒赖其汲，崖壁千年不废，水利与艺事相济（学界历史地理推论）。",
   "note": "地理（河流）+ 技术（水利营窟）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_I02",
   "subject": "place:mogaoku",
   "predicate": "石窟供养折射丝路贸易所聚之财富",
   "value_text": "莫高窟累世开窟造像、写经画壁，其供养多出自商胡与仕宦，折射丝路畅通时敦煌所聚之财富与信仰投入。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "北朝—唐",
   "place": "mogaoku",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "凿窟写经，费不赀而相继，商胡仕女竞施，丝路既通则赀货辐辏，艺事因以盛（学界丝路经济推论）。",
   "note": "技术（石窟）+ 社会（供养财富）。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_I03",
   "subject": "place:dunhuang_city",
   "predicate": "丝路中继地位使敦煌成多元文明交汇",
   "value_text": "敦煌处东西孔道，使佛教、祆教、景教、摩尼诸教与汉地文明于此叠加，成欧亚文明交汇之节点。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—唐",
   "place": "dunhuang_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "道出两关，风通四裔，释梵景摩并陈于市，敦煌乃为东西文明所凑之枢（学界文明交流推论）。",
   "note": "地理（丝路）+ 思想（文明交汇）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_I04",
   "subject": "place:yumen_guan",
   "predicate": "玉门关—阳关为汉长城西端关隘，锁钥西域",
   "value_text": "玉门关、阳关分扼丝路北南道，为汉长城西端关隘与出塞象征，地理形势使敦煌成中原西陲锁钥。",
   "value": "",
   "source": "hanshu",
   "layer": "inference",
   "era": "汉—唐",
   "place": "yumen_guan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "两关踞其西，北曰玉门、南曰阳关，出此即绝汉境，襟喉之重系乎一关（汉书/ 关隘志）。",
   "note": "地理（关隘）+ 制度（边防）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "DH_I05",
   "subject": "place:dunhuang_city",
   "predicate": "藏经洞文献使敦煌学成国际显学",
   "value_text": "藏经洞写本流散各国、引发持续研究，使敦煌学成为涵盖历史、语言、艺术、宗教的国际显学，知识网络跨越国界。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "近代—今",
   "place": "dunhuang_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "遗书既出，寰宇竞研，敦煌之学独立于史林，通则语言艺术宗教，跨国而为一科（学界学术史推论）。",
   "note": "思想（敦煌学）+ 社会（国际知识网络）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_G01",
   "subject": "place:mogaoku",
   "predicate": "早期洞窟（北凉—北魏）营造年代与匠籍数据有限",
   "value_text": "莫高窟北凉、北魏早期洞窟的具体营造年代序列与匠作籍贯、粉本来源等数据，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "北朝",
   "place": "mogaoku",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：早期洞窟营造史。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "莫高窟北凉—北魏早期洞窟营造年代序列、匠籍与粉本来源",
    "skills": [
     "美术史",
     "考古学",
     "敦煌学"
    ],
    "accept": "若有窟题记与碳十四测年对照，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_G02",
   "subject": "place:dunhuang_city",
   "predicate": "吐蕃—归义军时期基层社会结构文献有限",
   "value_text": "吐蕃占领与归义军时期敦煌基层乡里、寺户、部落的具体社会组织与人口结构，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "唐—五代",
   "place": "dunhuang_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：绿洲基层社会。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "吐蕃—归义军时期敦煌乡里、寺户、部落组织与人口结构",
    "skills": [
     "社会史",
     "敦煌学",
     "历史地理"
    ],
    "accept": "若有敦煌籍帐文书（户牒、部落制）出土，可补社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DH_G03",
   "subject": "place:dunhuang_city",
   "predicate": "汉唐敦煌郡城址与今敦煌市叠压关系考古有限",
   "value_text": "汉唐敦煌郡城（沙州城）具体城址范围、城门与今敦煌市（党河西岸）的位置叠压关系，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "汉—唐",
   "place": "dunhuang_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：郡城址叠压。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "汉唐敦煌郡（沙州）城址范围、城门与今敦煌市的叠压对应",
    "skills": [
     "考古学",
     "历史地理",
     "GIS"
    ],
    "accept": "若有沙州城考古测绘，可补地理(1)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "DH_G01",
  "DH_G02",
  "DH_G03"
 ],
 "events": [
  {
   "id": "ev_dunhuang_01",
   "year": -111,
   "era": "西汉元鼎六年",
   "kind": "设郡",
   "title": "汉武帝置敦煌郡·河西四郡成",
   "place": "dunhuang_city",
   "text": "汉武帝元鼎六年（前111）分酒泉郡西置敦煌郡，与武威、张掖、酒泉并称河西四郡，扼丝路南北道分岔，西控西域、南通羌中，敦煌由是起为西陲重镇。",
   "subject": "event:ev_dunhuang_01"
  },
  {
   "id": "ev_dunhuang_02",
   "year": 366,
   "era": "前秦建元二年",
   "kind": "开窟",
   "title": "乐僔开凿莫高窟第一窟",
   "place": "mogaoku",
   "text": "前秦建元二年（366）沙门乐僔行至三危山，见金光如千佛，遂架空凿岩造窟，莫高窟千年营缮由此肇端，终成世界规模最巨的佛教石窟艺术宝库。",
   "subject": "event:ev_dunhuang_02"
  },
  {
   "id": "ev_dunhuang_03",
   "year": 1900,
   "era": "清光绪二十六年",
   "kind": "发现",
   "title": "藏经洞发现·敦煌学兴",
   "place": "mogaoku",
   "text": "清光绪二十六年（1900）道士王圆箓于莫高窟第17窟发现藏经洞，出土汉、藏、粟特、于阗、回鹘、希伯来等多语写本数万件，震动学界，敦煌学由是成为国际显学。",
   "subject": "event:ev_dunhuang_03"
  }
 ],
 "edges": [
  {
   "from": "mogaoku",
   "to": "dunhuang_city",
   "relation": "东南25公里",
   "note": "莫高窟在敦煌绿洲东南三危山麓，大泉河（宕泉）经其前，为敦煌郡城近郊石窟。",
   "label": "东南25公里",
   "type": "misc"
  },
  {
   "from": "dachuan_river",
   "to": "mogaoku",
   "relation": "流经窟前",
   "note": "大泉河（宕泉）自莫高窟崖壁前流过，润窟区、供僧汲，水利支撑千年营缮。",
   "label": "流经窟前",
   "type": "misc"
  },
  {
   "from": "mingsha_shan",
   "to": "dunhuang_city",
   "relation": "南郊",
   "note": "鸣沙山·月牙泉在敦煌城南郊，沙泉共生为绿洲地景标志。",
   "label": "南郊",
   "type": "misc"
  },
  {
   "from": "yangguan",
   "to": "dunhuang_city",
   "relation": "西南",
   "note": "阳关在敦煌西南，扼丝路南道，与玉门关并峙为西陲两关。",
   "label": "西南",
   "type": "misc"
  },
  {
   "from": "yumen_guan",
   "to": "dunhuang_city",
   "relation": "西北",
   "note": "玉门关在敦煌西北，扼丝路北道，为汉长城西端锁钥西域之关。",
   "label": "西北",
   "type": "misc"
  }
 ],
 "control": [],
 "vocab": {
  "layers": {
   "record": "原始史料",
   "scholarship": "学界研究",
   "inference": "合理推断",
   "gap": "证据缺口"
  },
  "quote_status": {
   "verbatim": "直接引文",
   "paraphrase_unverified": "转述待核",
   "generated": "生成"
  },
  "parties": [
   "汉·官修",
   "汉·后朝官修",
   "五代·官修",
   "学界"
  ],
  "party_bucket": {
   "汉·官修": "汉·官修",
   "汉·后朝官修": "汉·后朝官修",
   "五代·官修": "五代·官修",
   "学界": "学界"
  },
  "party_colors": {
   "汉·官修": "#B23A48",
   "汉·后朝官修": "#C0584F",
   "五代·官修": "#7A6A53",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_汉·官修": {
    "name": "汉·官修",
    "macro_party": "汉·官修",
    "note": "auto"
   },
   "f_汉·后朝官修": {
    "name": "汉·后朝官修",
    "macro_party": "汉·后朝官修",
    "note": "auto"
   },
   "f_五代·官修": {
    "name": "五代·官修",
    "macro_party": "五代·官修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_汉·官修": "#B23A48",
   "f_汉·后朝官修": "#C0584F",
   "f_五代·官修": "#7A6A53",
   "f_学界": "#2E7D8F"
  }
 },
 "basemap": {
  "coastline": [],
  "land": [],
  "admin1": [],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   39.0,
   92.87,
   41.36,
   95.81
  ]
 }
};
