// 1. Unified Intersection Observer for all Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

// Apply observer to all reveal elements
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 2. Interactive Card Glow Effect (Mouse Tracking)
document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// 3. Navbar background transition on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav-inner');
  if (window.scrollY > 50) {
    nav.style.background = "rgba(10, 12, 16, 0.9)";
    nav.style.boxShadow = "0 10px 40px rgba(0,0,0,0.4)";
  } else {
    nav.style.background = "rgba(10, 12, 16, 0.7)";
    nav.style.boxShadow = "none";
  }
});

// 4. Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// --- Add this to your existing script.js ---

const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const body = document.body;

// Toggle menu on click
mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  body.classList.toggle('menu-open');
  
  // Toggle icon between bars and X
  const icon = mobileToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    body.classList.remove('menu-open');
    const icon = mobileToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});