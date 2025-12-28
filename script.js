// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navbar shadow/blur transition on scroll
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