const rootHtml = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const yearElement = document.getElementById('year');

const revealElements = document.querySelectorAll(
  '.hero-copy, .hero-card, .section-heading, .about-copy, .about-panel, .project-card, .cloud-box, .tech-group, .secondary-card, .contact-box'
);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (revealElements.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
  document.querySelectorAll('.projects-grid, .tech-grid, .secondary-projects').forEach((group) => {
    Array.from(group.children).forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${index * 90}ms`);
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -32px 0px' }
  );

  revealElements.forEach((element) => {
    element.classList.add('reveal-on-scroll');
    revealObserver.observe(element);
  });
}

const applyTheme = (theme) => {
  rootHtml.setAttribute('data-theme', theme);

  if (!themeToggle) return;

  const isLight = theme === 'light';
  themeToggle.innerHTML = isLight ? '<span class="theme-toggle__icon">🌙</span>' : '<span class="theme-toggle__icon">☀️</span>';
  themeToggle.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
};

if (themeToggle) {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const nextTheme = rootHtml.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', nextTheme);
    applyTheme(nextTheme);
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
