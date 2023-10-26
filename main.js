const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  navToggle.setAttribute(
    "aria-expanded",
    !primaryNav.hasAttribute("data-visible")
  );
  primaryNav.toggleAttribute("data-visible");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: false,
  arrows: false,
  slidesToShow: 1,
  responsive: {
    480: {
      slidesToShow: 2,
    },
    1024: {
      slidesToShow: 3,
    },
  },
});
