/* ============================================================
   main.js — Perilaku umum situs (semua halaman)
   Loading screen, navbar, dark mode, FAB, reveal-on-scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Loading screen ---------- */
  const loader = document.getElementById('loading-screen');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 350);
    });
    // Fallback safety: hide loader even if 'load' fires slowly
    setTimeout(() => loader.classList.add('hidden'), 2500);
  }

  /* ---------- 2. Sticky navbar shrink-on-scroll ---------- */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    const fab = document.querySelector('.fab');
    if (fab) fab.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 3. Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  /* ---------- 4. Dark / Light mode toggle ---------- */
  const themeBtn = document.querySelector('.theme-toggle');
  const applyTheme = (mode) => {
    document.body.classList.toggle('light-mode', mode === 'light');
    if (themeBtn) {
      const icon = themeBtn.querySelector('i');
      if (icon) icon.className = mode === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  };
  const savedTheme = localStorage.getItem('ix_theme') || 'dark';
  applyTheme(savedTheme);
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-mode');
      const next = isLight ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem('ix_theme', next);
    });
  }

  /* ---------- 5. Reveal-on-scroll (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  /* ---------- 6. Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          navLinks && navLinks.classList.remove('mobile-open');
        }
      }
    });
  });

  /* ---------- 7. Floating "back to top" button ---------- */
  const fab = document.querySelector('.fab');
  if (fab) {
    fab.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

});
