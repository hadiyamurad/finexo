
  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    
    // Function to update active state
    function setActiveLink() {
      const fromTop = window.scrollY + 100; // Offset for navbar height
      navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }

    // Add click event to smoothly scroll to section
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust offset for fixed navbar
          behavior: "smooth",
        });
      });
    });

    // Listen for scroll events to update active state
    window.addEventListener("scroll", setActiveLink);
  });

