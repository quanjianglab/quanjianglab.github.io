/* Change the name, institution and contact details in site-config.js. */
(function () {
  const config = window.LAB_CONFIG || {};
  for (const el of document.querySelectorAll('[data-field]')) {
    const key = el.dataset.field;
    if (Object.prototype.hasOwnProperty.call(config,key) && config[key]) {
      el.textContent = config[key];
    }
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }));
  }
})();
