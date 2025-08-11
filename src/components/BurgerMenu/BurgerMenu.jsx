const burgerDiv = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

const BurgerMenu = () => {
  burgerDiv.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade .5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
  burgerDiv.classList.toggle("toggle");
};

export default BurgerMenu;
