// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Play button functionality
document.querySelector(".play-button")?.addEventListener("click", function () {
  // Add your video play logic here
  console.log("Play button clicked")
  this.style.transform = "translate(-50%, -50%) scale(0.9)"
  setTimeout(() => {
    this.style.transform = "translate(-50%, -50%) scale(1)"
  }, 150)
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".service-card, .portfolio-item, .timeline-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Header scroll effect
let lastScrollTop = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.transform = "translateY(-100%)"
  } else {
    // Scrolling up
    header.style.transform = "translateY(0)"
  }

  lastScrollTop = scrollTop
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1"
  document.body.style.transition = "opacity 0.5s ease"
})

// Initialize
document.body.style.opacity = "0"
