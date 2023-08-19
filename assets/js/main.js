// ======================================== SHOW MENU ======================================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// ======================================== MENU SHOW ======================================
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ======================================== MENU HIDDEN ====================================
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ======================================== REMOVE MENU MOBILE =============================
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", linkAction));

// ======================================== CHANGE BACKGROUND HEADER =======================
const scrollHeader = () => {
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// ======================================== SHOW SCROLL UP =================================
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag
  this.scrollY > 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// ======================================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((curr) => {
    const sectionHeight = curr.offsetHeight,
      sectionTop = curr.offsetTop - 58,
      sectionId = curr.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (sectionClass) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionClass.classList.add("active-link");
      } else {
        sectionClass.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);

// ======================================== DARK LIGHT THEME ===============================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously choose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ======================================== SCROLL REVEAL ANIMATION ========================
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true, // Animations repeat
});

sr.reveal(`.home-img, .newsletter-container, .footer-logo,
          .footer-description, .footer-content, .footer-info`);
sr.reveal(`.home-data`, { origin: "bottom" });
sr.reveal(`.about-data, .recently-data`, { origin: "left" });
sr.reveal(`.about-img, .recently-img`, { origin: "right" });
sr.reveal(`.popular-card`, { interval: 100 });
