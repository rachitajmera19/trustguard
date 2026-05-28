// ======= SCROLL ANIMATIONS =======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ======= NAVBAR SCROLL SHADOW =======
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ======= MOBILE MENU =======
const toggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('ti-menu-2');
    icon.classList.toggle('ti-x');
  });
}

// ======= ACTIVE NAV LINK =======
const path = window.location.pathname;
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (!href) return;
  const hrefParts = href.split('/').pop().split('#')[0];
  const pathParts = path.split('/').pop();
  if (
    (pathParts === '' && (href === 'index.html' || href === '../index.html' || href === '/')) ||
    (hrefParts !== '' && pathParts === hrefParts)
  ) {
    a.classList.add('active');
  }
});

// ======= HOMEPAGE SEARCH =======
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.comp-card');
    let visible = 0;
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const show = !q || text.includes(q);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  });
}

// ======= SMOOTH SCROLL for anchor links =======
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ======= CARD CLICK NAVIGATION =======
document.querySelectorAll('.comp-card[data-href]').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = card.dataset.href;
  });
});

// ======= READING PROGRESS BAR =======
const bar = document.getElementById('readingBar');
if (bar) {
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = (scrollTop / height * 100) + '%';
  });
}
