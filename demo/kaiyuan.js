/* 开原县级切片 · 场景配置（逻辑见 county.js）
 * 必须在本文件之后加载 county.js。 */
window.COUNTY_SCENE = 'kaiyuan';
window.COUNTY_CONF = {
  primary_place: 'kaiyuan_cheng',
  dossier_event: 'event:kaifa',
  lead: '开原是辽北第一重镇：明三万卫—清开原县，万历四十七年（1619）陷于后金，' +
        '叶赫随之灭亡。下方为建置沿革与关键战事，点时间轴或左栏跳转。',
  parties_note: '开原陷落（1619）在明、清、朝鲜三方叙事中各有侧重。系统不裁决，只并列。',
  route_assertions: ['K008', 'K009', 'K020', 'K027e'],
  subject_names: {
    'army:jin_kaifa': '后金攻开原兵力',
    'event:kaifa': '开铁之战',
    'place:kaiyuan_cheng': '开原城',
    'person:zhengzhifan': '郑之范',
    'event:yehe': '叶赫',
    'doc:kaiyuan_tushuo': '开原图说'
  }
};
