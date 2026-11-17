// Page behaviour: header state, menu dialog, sliding tabs, teaser rails, scroll reveals,
// spotlight lists and counters.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* loading screen: stays until the page and its images are in, at least 0.9 s, at most 4 s */
const root = document.documentElement;
if (root.classList.contains('is-loading')) {
  const t0 = performance.now();
  const finish = () => {
    if (!root.classList.contains('is-loading')) return;
    setTimeout(() => {
      root.classList.replace('is-loading', 'is-loaded');
      try {
        sessionStorage.setItem('tq-seen', '1');
      } catch {}
    }, Math.max(0, 900 - (performance.now() - t0)));
  };
  document.readyState === 'complete' ? finish() : addEventListener('load', finish, { once: true });
  setTimeout(finish, 4000);
}

/* header turns solid once the page is scrolled */
const header = document.querySelector('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
}

/* menu: native <dialog> gives focus trapping, Esc and an inert page for free.
   Hovering or focusing a main item shows its subpages; on touch screens a tap toggles them. */
const menu = document.querySelector('[data-menu]');
if (menu) {
  const items = [...menu.querySelectorAll('[data-menu-item]')];
  const activate = (item) => items.forEach((it) => it.classList.toggle('is-active', it === item));
  const touch = matchMedia('(hover: none)');
  items.forEach((item) => {
    item.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && activate(item));
    item.addEventListener('focusin', () => activate(item));
    item.querySelector('.menu__link').addEventListener('click', (e) => {
      // without hover there is no way to preview the subpages: the first tap opens them
      if (!touch.matches || item.classList.contains('is-active')) return;
      e.preventDefault();
      activate(item);
    });
  });
  document.querySelector('[data-menu-open]')?.addEventListener('click', () => menu.showModal());
  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => menu.close());
}

/* sliding tabs: one panel open at a time; hover opens on pointer devices */
document.querySelectorAll('[data-tabs]').forEach((tabs) => {
  const items = [...tabs.querySelectorAll('.tab')];
  const open = (item) =>
    items.forEach((it) => {
      const on = it === item;
      it.classList.toggle('is-active', on);
      it.querySelector('.tab__toggle').setAttribute('aria-expanded', on);
    });
  const wide = matchMedia('(min-width: 841px) and (hover: hover)');
  items.forEach((it) => {
    it.querySelector('.tab__toggle').addEventListener('click', () => open(it));
    it.addEventListener('pointerenter', () => wide.matches && open(it));
  });
});

/* teaser rails: native scroll-snap, plus arrows and mouse dragging */
document.querySelectorAll('[data-rail]').forEach((wrap) => {
  const rail = wrap.querySelector('.teasers__rail');
  const [prev, next] = [wrap.querySelector('[data-prev]'), wrap.querySelector('[data-next]')];
  const step = () => (rail.firstElementChild?.getBoundingClientRect().width ?? 300) + parseFloat(getComputedStyle(rail).columnGap || 0);
  const sync = () => {
    if (prev) prev.disabled = rail.scrollLeft < 4;
    if (next) next.disabled = rail.scrollLeft > rail.scrollWidth - rail.clientWidth - 4;
  };
  prev?.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
  rail.addEventListener('scroll', sync, { passive: true });
  addEventListener('resize', sync);
  sync();

  let startX = 0;
  let startLeft = 0;
  let moved = false;
  rail.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button) return;
    startX = e.clientX;
    startLeft = rail.scrollLeft;
    moved = false;
    const move = (ev) => {
      const dx = ev.clientX - startX;
      if (!moved && Math.abs(dx) > 6) {
        moved = true;
        rail.classList.add('is-dragging');
      }
      if (moved) rail.scrollLeft = startLeft - dx;
    };
    const up = () => {
      removeEventListener('pointermove', move);
      removeEventListener('pointerup', up);
      if (!moved) return;
      // let the click that follows a drag die, then snap to the nearest card
      rail.addEventListener('click', (ev) => ev.preventDefault(), { capture: true, once: true });
      requestAnimationFrame(() => {
        rail.classList.remove('is-dragging');
        rail.scrollTo({ left: Math.round(rail.scrollLeft / step()) * step(), behavior: 'smooth' });
      });
    };
    addEventListener('pointermove', move);
    addEventListener('pointerup', up);
  });
  rail.addEventListener('dragstart', (e) => e.preventDefault());
});

/* scroll reveals: content is visible without JS; .js on <html> arms the hidden start state */
const reveals = document.querySelectorAll('[data-reveal]');
if (reveals.length) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
}

/* spotlight lists: the item crossing the middle of the viewport is lit */
document.querySelectorAll('[data-spot]').forEach((list) => {
  const items = [...list.children];
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && items.forEach((it) => it.classList.toggle('is-active', it === e.target))),
    { rootMargin: '-45% 0px -45% 0px' },
  );
  items.forEach((it) => io.observe(it));
});

/* counters: "28+" counts up from zero once, keeping its suffix */
const counters = document.querySelectorAll('[data-count]');
if (counters.length && !reduceMotion) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target;
        const [, digits, suffix] = el.textContent.trim().match(/^(\d+)(.*)$/) ?? [];
        if (!digits) return;
        const target = +digits;
        const t0 = performance.now();
        const step = (now) => {
          const p = Math.min((now - t0) / 1400, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4))) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }),
    { rootMargin: '0px 0px -10% 0px' },
  );
  counters.forEach((el) => io.observe(el));
}

/* hero video: only start loading when the browser is idle, never with reduced motion or data saver */
const video = document.querySelector('[data-hero-video]');
if (video && !matchMedia('(prefers-reduced-motion: reduce)').matches && !navigator.connection?.saveData) {
  const start = () => {
    video.querySelectorAll('source[data-src]').forEach((s) => (s.src = s.dataset.src));
    video.load();
    video.play().catch(() => {});
  };
  document.readyState === 'complete' ? start() : addEventListener('load', start, { once: true });
  // the hero is pinned behind the page; stop decoding once it is covered
  addEventListener(
    'scroll',
    () => {
      const covered = scrollY > innerHeight;
      if (covered && !video.paused) video.pause();
      else if (!covered && video.paused && video.currentSrc) video.play().catch(() => {});
    },
    { passive: true },
  );
}
