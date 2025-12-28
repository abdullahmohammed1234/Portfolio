const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  e.target.reset();
});

/* ===== SCROLL REVEAL ===== */
const revealElements = document.querySelectorAll(".reveal");
const animatedItems = document.querySelectorAll(
  ".project-card, .about-skills, .contact-form"
);

const observerOptions = {
  threshold: 0.15,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

revealElements.forEach((el) => revealObserver.observe(el));
animatedItems.forEach((el) => revealObserver.observe(el));

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
