/* ============================================================
   全站统一页壳 · page-shell.js
   负责：① 移动端汉堡抽屉 ② 侧栏滚动高亮 ③ 侧栏搜索过滤
        ④ 锚点偏移（自动测量 sticky 顶栏高度） ⑤ 抽屉内点链接自动收起
   由 page-shell.css 配套；各页只需自带 .sidebar / .menu-btn / .mask 标记。
   ============================================================ */
(function () {
  'use strict';

  var MOBILE_MAX = 900;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var body = document.body;
    var menuBtn = document.getElementById('menuBtn');
    var mask = document.getElementById('mask');
    var search = document.getElementById('navSearch');
    var links = [].slice.call(document.querySelectorAll('.sidebar .nav-link'));

    /* ---------- ① 移动端抽屉 ---------- */
    function closeMenu() { body.classList.remove('menu-open'); }
    function toggleMenu() { body.classList.toggle('menu-open'); }
    if (menuBtn) {
      menuBtn.addEventListener('click', function (e) { e.stopPropagation(); toggleMenu(); });
    }
    if (mask) mask.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    /* ---------- ② 锚点偏移：量一次 sticky 顶栏，写进 scroll-margin-top ---------- */
    var targets = [];
    links.forEach(function (l) {
      var href = l.getAttribute('href') || '';
      if (href.charAt(0) !== '#' || href.length < 2) return;
      var el = document.getElementById(href.slice(1));
      if (!el) return;
      if (targets.indexOf(el) === -1) targets.push(el);
      el.setAttribute('data-shell-anchor', '');
      l.__target = el;
    });

    function measureOffset() {
      var h = 0;
      ['.topbar', '.banner', '.hero-sticky', 'header'].forEach(function (sel) {
        var el = document.querySelector(sel);
        if (!el) return;
        var cs = getComputedStyle(el);
        if (cs.position !== 'sticky' && cs.position !== 'fixed') return;
        if (cs.display === 'none' || el.offsetHeight === 0) return;
        h = Math.max(h, el.offsetHeight);
      });
      document.documentElement.style.setProperty('--shell-anchor', h + 'px');
    }
    measureOffset();
    window.addEventListener('resize', measureOffset);
    window.addEventListener('orientationchange', measureOffset);

    /* ---------- ③ 搜索过滤（同时隐藏被清空的分组） ---------- */
    var groups = [].slice.call(document.querySelectorAll('.sidebar .nav-group'));
    /* 页面可选：暴露 window.pageShellContentFilter(kw) 即可让侧栏搜索框同时过滤正文 */
    var cbTimer = null, lastKw = '';
    function pushContentFilter(kw) {
      if (typeof window.pageShellContentFilter !== 'function' || kw === lastKw) return;
      lastKw = kw;
      clearTimeout(cbTimer);
      cbTimer = setTimeout(function () { window.pageShellContentFilter(kw); }, 140);
    }
    function filterNav() {
      var kw = (search && search.value || '').trim().toLowerCase();
      links.forEach(function (l) {
        var kwStr = (l.getAttribute('data-kw') || '') + ' ' + l.textContent;
        l.style.display = (!kw || kwStr.toLowerCase().indexOf(kw) !== -1) ? 'block' : 'none';
      });
      groups.forEach(function (g) {
        var shown = [].slice.call(g.querySelectorAll('.nav-link')).some(function (l) {
          return l.style.display !== 'none';
        });
        g.style.display = shown ? '' : 'none';
      });
      if (!kw) groups.forEach(function (g) { g.style.display = ''; });
      pushContentFilter(kw);
    }
    if (search) {
      search.addEventListener('input', filterNav);
      search.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { search.value = ''; filterNav(); }
      });
    }

    /* ---------- ④ 滚动高亮 ---------- */
    var scrollTargets = links
      .map(function (l) { return { link: l, el: l.__target }; })
      .filter(function (x) { return x.el; });

    var ticking = false;
    function navActive() {
      ticking = false;
      var probe = window.scrollY + (parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--shell-anchor')) || 16) + 40;
      /* 取「已滚过且最靠下」的那一个：不依赖侧栏链接与正文的先后一致 */
      var cur = null, best = -Infinity;
      for (var i = 0; i < scrollTargets.length; i++) {
        var t = scrollTargets[i].el.offsetTop;
        if (t <= probe && t >= best) { best = t; cur = scrollTargets[i].el; }
      }
      if (!cur) cur = scrollTargets.length ? scrollTargets[0].el : null;
      scrollTargets.forEach(function (x) { x.link.classList.toggle('active', x.el === cur); });
      /* 侧栏内让当前项可见 */
      var act = document.querySelector('.sidebar .nav-link.active');
      if (act && act.scrollIntoView) act.scrollIntoView({ block: 'nearest' });
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(navActive);
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- ⑤ 点链接：抽屉自动收起 ---------- */
    links.forEach(function (l) {
      l.addEventListener('click', function () {
        if (window.innerWidth <= MOBILE_MAX) closeMenu();
      });
    });
    if (window.innerWidth > MOBILE_MAX) closeMenu();
    window.addEventListener('resize', function () {
      if (window.innerWidth > MOBILE_MAX) closeMenu();
    });

    navActive();
  });
})();
