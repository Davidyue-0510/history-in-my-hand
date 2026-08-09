/* 切片懒加载器（v0.22 地基二配套）
 *
 * 当前 demo 由 demo/data.js 尾部的同步 bootstrap 在解析期把所有切片组装进
 * SANDBOX_DATA.scenes，既有前端零改动。当切片规模扩大到全国（数百个）时，
 * 不应再首屏全量加载 —— 把 bootstrap 换成这里即可按需异步加载：
 *
 *     SANDBOX_LOADER.loadScene('guangning').then(function (D) {
 *       // D 即原 SD.scenes['guangning']
 *     });
 *
 * 枢纽卡片等只需列表信息的场景，读 SANDBOX_DATA.scenes_meta 即可，无需加载完整 bundle。
 */
(function () {
  'use strict';
  var SLICES = (window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
  var SD = window.SANDBOX_DATA || {};
  var index = SD.slice_index || {};
  var loading = {};

  function fileOf(id) {
    return index[id] || ('slices/' + id + '.js');
  }

  // 同步取：切片已加载则返回，否则返回 null（配合 loadScene 预取）
  function getScene(id) {
    return (SD.scenes && SD.scenes[id]) || SLICES[id] || null;
  }

  // 异步确保切片已就绪；已加载则立即 resolve，否则注入 <script> 后 resolve
  function loadScene(id) {
    var ready = getScene(id);
    if (ready) return Promise.resolve(ready);
    if (loading[id]) return loading[id];
    loading[id] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = fileOf(id);
      s.onload = function () { resolve(getScene(id)); };
      s.onerror = function () { reject(new Error('切片加载失败: ' + id)); };
      (document.head || document.body).appendChild(s);
    });
    return loading[id];
  }

  // 批量预取（枢纽进入时可选调用，提前暖场）
  function preload(ids) {
    (ids || SD.scene_order || []).forEach(function (id) {
      if (!getScene(id)) loadScene(id);
    });
  }

  window.SANDBOX_LOADER = {
    getScene: getScene,
    loadScene: loadScene,
    preload: preload,
    sliceIndex: index
  };
})();
