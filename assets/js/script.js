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

document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  const mobileNav = document.querySelector(".mobile-nav")

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation()

      const isActive = mobileNav.classList.contains("active")

      if (isActive) {
        mobileNav.classList.remove("active")
        mobileToggle.classList.remove("active")
      } else {
        mobileNav.classList.add("active")
        mobileToggle.classList.add("active")
      }
    })

    document.addEventListener("click", (event) => {
      if (!mobileToggle.contains(event.target) && !mobileNav.contains(event.target)) {
        mobileNav.classList.remove("active")
        mobileToggle.classList.remove("active")
      }
    })

    const mobileNavLinks = mobileNav.querySelectorAll("a")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
        mobileToggle.classList.remove("active")
      })
    })
  }
})

document.querySelector(".play-button")?.addEventListener("click", function () {
  this.style.transform = "translate(-50%, -50%) scale(0.9)"
  setTimeout(() => {
    this.style.transform = "translate(-50%, -50%) scale(1)"
  }, 150)
})

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

document.querySelectorAll(".service-card, .portfolio-item, .timeline-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

let lastScrollTop = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.style.transform = "translateY(-100%)"
  } else {
    header.style.transform = "translateY(0)"
  }

  lastScrollTop = scrollTop
})

window.addEventListener("load", () => {
  document.body.style.opacity = "1"
  document.body.style.transition = "opacity 0.5s ease"
})

document.body.style.opacity = "0"
