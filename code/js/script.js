///////////////////////////////////////////////////////////
// Set Current Year auto
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();

year.textContent = currentYear;

///////////////////////////////////////////////////////////
// Anoter way to make mobile navigation work

// const mobileMenu = document.querySelector(
//   '.icon-mobile-nav[name="menu-outline"]'
// );
// const mobileClose = document.querySelector(
//   '.icon-mobile-nav[name="close-outline"]'
// );
// mobileClose.addEventListener("click", () => {
//   headerNav.classList.remove("nav-open");
// });
// mobileMenu.addEventListener("click", () => {
//   headerNav.classList.add("nav-open");
// });

///////////////////////////////////////////////////////////
// Make Mobile Navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerNav = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  headerNav.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scrolling back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerNav.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);

obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
