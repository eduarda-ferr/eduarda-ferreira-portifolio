const rootHtml = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const yearElement = document.getElementById('year');

const applyTheme = (theme) => {
  rootHtml.setAttribute('data-theme', theme);

  if (!themeToggle) return;

  const isLight = theme === 'light';
  themeToggle.innerHTML = isLight
    ? '<i class="bi bi-moon-fill" aria-hidden="true"></i>'
    : '<i class="bi bi-sun-fill" aria-hidden="true"></i>';
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
