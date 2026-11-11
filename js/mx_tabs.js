/**
 * mx_tabs.js —— 可复用的选项卡（Tab）组件
 * 用法：
 *   1. 选项卡组容器加属性 data-mx-tabs；
 *   2. 每个按钮加 data-mx-tab="键名"，并带 class="mx_tab"；
 *   3. 每个面板加 data-mx-panel="键名"，并带 class="mx_tab-panel"。
 * 选中态：按钮 .mx_tab-active，面板 .mx_tab-panel-active。
 */
(function () {
  'use strict';

  /**
   * 主要功能：初始化一个选项卡组——缓存按钮与面板、绑定点击监听，
   * 并按「已标记的默认项 → 第一个按钮」的顺序激活默认选项卡。
   */
  function mx_initTabs(mx_root) {
    if (!mx_root) { return; }

    var mx_tabs = Array.prototype.slice.call(mx_root.querySelectorAll('[data-mx-tab]'));
    var mx_panels = Array.prototype.slice.call(mx_root.querySelectorAll('[data-mx-panel]'));
    if (!mx_tabs.length || !mx_panels.length) { return; }

    /**
     * 主要功能：清除该选项卡组内所有按钮与面板的选中状态（含可访问性属性），
     * 保证任意时刻只有一项处于选中状态。
     */
    function mx_clearSelection() {
      mx_tabs.forEach(function (mx_tab) {
        mx_tab.classList.remove('mx_tab-active');
        mx_tab.setAttribute('aria-selected', 'false');
        mx_tab.setAttribute('tabindex', '-1');
      });
      mx_panels.forEach(function (mx_panel) {
        mx_panel.classList.remove('mx_tab-panel-active');
        mx_panel.hidden = true;
      });
    }

    /**
     * 主要功能：激活指定按钮对应的选项卡——先清除全部选中状态，
     * 再为当前按钮与其 data-mx-tab 键名匹配的面板设置选中状态。
     */
    function mx_activateTab(mx_tab) {
      var mx_key = mx_tab.getAttribute('data-mx-tab');

      mx_clearSelection();

      mx_tab.classList.add('mx_tab-active');
      mx_tab.setAttribute('aria-selected', 'true');
      mx_tab.setAttribute('tabindex', '0');

      var mx_panel = mx_panels.filter(function (mx_item) {
        return mx_item.getAttribute('data-mx-panel') === mx_key;
      })[0];

      if (mx_panel) {
        mx_panel.classList.add('mx_tab-panel-active');
        mx_panel.hidden = false;
      }
    }

    mx_tabs.forEach(function (mx_tab) {
      // 监听点击事件：点击哪个选项卡就激活哪个
      mx_tab.addEventListener('click', function () {
        mx_activateTab(mx_tab);
      });
    });

    var mx_defaultTab = mx_root.querySelector('[data-mx-tab].mx_tab-active') || mx_tabs[0];
    mx_activateTab(mx_defaultTab);
  }

  /**
   * 主要功能：自动初始化页面上所有带 data-mx-tabs 属性的选项卡组，
   * 使同一个脚本可以被多个页面复用。
   */
  function mx_initAllTabs() {
    var mx_groups = Array.prototype.slice.call(document.querySelectorAll('[data-mx-tabs]'));
    mx_groups.forEach(function (mx_group) {
      mx_initTabs(mx_group);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mx_initAllTabs);
  } else {
    mx_initAllTabs();
  }

  // 暴露给外部调用：手动初始化某个容器，或重新扫描整页
  window.mx_tabs = {
    init: mx_initTabs,
    initAll: mx_initAllTabs
  };
})();
