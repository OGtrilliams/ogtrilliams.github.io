import Navbar from "../Navbar/Navbar.jsx";
import ThemeToggle from "../ThemeContext/ThemeToggle.jsx";
import "./Header.css";

const BurgerMenu = () => {
  const burgerDiv = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar li");

  burgerDiv.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burgerDiv.classList.toggle("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .2s ease forwards ${index / +0.8}s`;
      }
    });
  });
};

const switchSource = () => {
  const darkImg = document.querySelector(".dark");
  const lightImg = document.querySelector(".light");

  if (document.body.classList.contains("dark-mode")) {
    console.log("turn on the lights!");
    darkImg.classList.add("active");
    lightImg.classList.remove("active");
  } else {
    darkImg.classList.remove("active");
    lightImg.classList.add("active");
  }
};
// update hero image source

const Header = () => {
  return (
    <>
      <div className="site-header header-page">
        {" "}
        <div className="logo">
          <a href="/">
            <h4>trilliams.sh</h4>
          </a>
        </div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="toggle-burger" onClick={switchSource}>
          <ThemeToggle />
          <div className="bag">
            <div className="bun">
              <div className="burger" onClick={BurgerMenu}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
