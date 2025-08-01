document.addEventListener("DOMContentLoaded", function () {
  // Loader
  window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("hidden");
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNavList = document.querySelector(".mainNavList");
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    mainNavList.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });

  // Smooth Scrolling and Active Link Highlighting
  const navLinks = document.querySelectorAll(".mainNavList a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.hash) {
        e.preventDefault();
        const targetId = this.hash.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth",
          });
          navLinks.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
          if (mainNavList.classList.contains("show")) {
            menuToggle.click();
          }
        }
      }
    });
  });

  // Highlight Active Section on Scroll
  const sections = document.querySelectorAll("section, header");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Fade-in Animation for Sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  document
    .querySelectorAll("section")
    .forEach((section) => observer.observe(section));

  // Order Now Button
  const orderButton = document.querySelector(".hero .cta-button");
  orderButton.addEventListener("click", () => {
    window.location.href = "order.html"; // Replace with actual order page
  });

  // Reservation Form
  const reservationForm = document.querySelector("#reservation-form");
  const modal = document.querySelector("#reservation-modal");
  const closeModalButtons = document.querySelectorAll(
    ".close-modal, .close-modal-button"
  );

  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = reservationForm.querySelectorAll("input, select");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
        input.style.borderColor = "#FF0000";
      } else {
        input.style.borderColor = "#CCCCCC";
      }
    });

    if (isValid) {
      modal.classList.add("show");
      reservationForm.reset();
    } else {
      alert("Please fill in all required fields.");
    }
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  });

  // Newsletter Form
  const newsletterForm = document.querySelector("#newsletter-form");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input[type='email']").value;
    if (email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
      alert("Thank you for subscribing!");
      newsletterForm.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
