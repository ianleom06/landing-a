// ==== Inline script block #2 from index_single.html ====
/* Tailwind tokens (ajústalos a tu branding) */
    tailwind.config = {
      theme: {
        fontFamily: { sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'] },
        extend: {
          colors: {
            base: {
              900: '#0b0e12',
              800: '#101418',
              700: '#141922',
              600: '#1b2230'
            },
            text: {
              DEFAULT: '#e6e7eb',
              soft: '#b9c0cc',
            },
            accent: {
              green: '#24D082',
              teal: '#1ED6BE',
              blue: '#30A8F7'
            }
          },
          boxShadow: {
            elev: '0 10px 30px rgba(0,0,0,.35)',
            glow: '0 0 0 2px rgba(36,208,130,.18), 0 35px 60px -15px rgba(36,208,130,.45)',
          },
          borderRadius: {
            xl2: '1rem',
          }
        }
      }
    }


// ==== Inline script block #3 from index_single.html ====
// MENU mobile toggle
    const btn = document.getElementById('btnMenu');
    const nav = document.getElementById('navMobile');
    btn?.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('hidden');
    });

    // Smooth scroll fix for anchor focus
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.setAttribute('tabindex', '-1');
          el.focus({ preventScroll: true });
        }
      });
    });

    // Pruebas rápidas (console.assert)
    console.assert(document.querySelector('#hero') && document.querySelector('#precios'), 'Secciones clave presentes');
    console.assert(window.getComputedStyle(document.body).backgroundImage.includes('radial-gradient'), 'Fondo decorativo activo');
