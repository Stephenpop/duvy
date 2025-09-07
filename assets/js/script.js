document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      document.querySelector(".nav-menu").classList.remove("active");
      document.querySelector(".mobile-nav-toggle i").classList.remove("fa-times");
      document.querySelector(".mobile-nav-toggle i").classList.add("fa-bars");
    }
  });
});

document.querySelector(".play-button")?.addEventListener("click", function () {
  console.log("Play button clicked");
  this.style.transform = "translate(-50%, -50%) scale(0.9)";
  setTimeout(() => {
    this.style.transform = "translate(-50%, -50%) scale(1)";
  }, 150);
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".service-card, .portfolio-item, .timeline-item").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop;
});

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.5s ease";
});

document.body.style.opacity = "0";

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navMenu = document.querySelector(".nav-menu");

mobileNavToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const icon = mobileNavToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

document.querySelector(".sign-in-btn").addEventListener("click", () => {
  navMenu.classList.remove("active");
  const icon = mobileNavToggle.querySelector("i");
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
});
