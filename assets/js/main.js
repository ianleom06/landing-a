// ===== MENU móvil + scroll con offset + accesibilidad =====
(() => {
  // Toggle menú móvil
  const btn = document.getElementById('btnMenu');
  const navMobile = document.getElementById('navMobile');

  btn?.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    navMobile?.classList.toggle('hidden', open);
  });

  // Prefiere menos animaciones
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Calcula offset por header fijo
  const header = document.querySelector('header');
  const baseOffset = (header?.offsetHeight || 0) + 12; // +12px de aire

  // Scroll con offset y foco accesible
  function scrollToHash(hash, extra = 0) {
    if (!hash || hash === '#') return;
    const el = document.querySelector(hash);
    if (!el) return;

    const y = Math.max(
      0,
      el.getBoundingClientRect().top + window.pageYOffset - (baseOffset + extra)
    );

    window.scrollTo({ top: y, behavior: prefersReduced ? 'auto' : 'smooth' });

    // Foco accesible (sin re-scroll)
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }

  // Delegación para TODOS los <a href="#...">
  document.addEventListener('click', (ev) => {
    const a = ev.target.closest('a[href^="#"]');
    if (!a) return;

    const hash = a.getAttribute('href');
    if (!hash || hash === '#') return;

    ev.preventDefault();

    // Si el link está en el menú móvil, lo cierro
    if (navMobile && navMobile.contains(a)) {
      navMobile.classList.add('hidden');
      btn?.setAttribute('aria-expanded', 'false');
    }

    // Scroll con offset (sirve para "Ver Precios", etc.)
    scrollToHash(hash);
  });

  // Si la página carga con hash (#precios, #contacto, etc.)
  if (location.hash) {
    requestAnimationFrame(() => scrollToHash(location.hash));
  }

  // Checks rápidos en consola
  console.assert(document.querySelector('#hero') && document.querySelector('#precios'), 'Secciones clave presentes');
  console.assert(getComputedStyle(document.body).backgroundImage.includes('repeating-linear-gradient'), 'Patrón de fondo activo');
})();
