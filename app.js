// Mobile menu toggle functionality
document.getElementById("mobileMenuButton")
  document.addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("show");

    // Toggle icon between bars and times
    const icon = this.querySelector("i");
    if (mobileMenu.classList.contains("show")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobileMenu .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.remove("show");
    document
      .getElementById("mobileMenuButton")
      .querySelector("i")
      .classList.remove("fa-times");
    document
      .getElementById("mobileMenuButton")
      .querySelector("i")
      .classList.add("fa-bars");
  });
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Slider
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dot");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Auto slide every 5 seconds
  let slideInterval = setInterval(nextSlide, 5000);

  // Pause on hover
  const slider = document.querySelector(".slider-container");
  slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  slider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000);
  });
  // Navigation controls
  rightArrow.addEventListener("click", nextSlide);
  leftArrow.addEventListener("click", prevSlide);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });
});


$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});