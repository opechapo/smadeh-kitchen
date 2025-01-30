document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll(".mainNavList a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          });
        }
      }
    });
  });

  // "Order Now" button functionality
  const orderButton = document.querySelector(".section1 button");
  if (orderButton) {
    orderButton.addEventListener("click", function () {
      alert("Redirecting to the order page...");
      // Redirect to order page (update URL accordingly)
      window.location.href = "order.html"; 
    });
  }

  // Reservation Form Validation
  const reservationForm = document.querySelector(".reserve button");
  if (reservationForm) {
    reservationForm.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form submission
      
      const fullName = document.querySelector('input[placeholder="Full name"]').value.trim();
      const phone = document.querySelector('input[placeholder="Phone number"]').value.trim();
      const email = document.querySelector('input[placeholder="Email address"]').value.trim();
      const guests = document.querySelector("#number_of_guests").value;
      const date = document.querySelector('input[type="date"]').value;

      if (!fullName || !phone || !email || !guests || !date) {
        alert("Please fill in all fields before making a reservation.");
        return;
      }

      alert("Reservation successful! We will contact you soon.");
      // You can submit the form to a server or store it in local storage here.
    });
  }

  // Newsletter subscription validation
  const newsletterForm = document.querySelector(".newsletter form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      const emailInput = document.querySelector(".newsletter input[type='email']").value.trim();
      if (!emailInput.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
      } else {
        alert("Thank you for subscribing to our newsletter!");
      }
    });
  }
});
