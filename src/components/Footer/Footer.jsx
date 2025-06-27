import Clock from "../Pages/Clock.jsx";
import ThemeToggle from "../ThemeContext/ThemeToggle.jsx";
import Contact from "../Contact/Contact.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import "./Footer.css";
import ProfileCard from "../Pages/ProfileCard.jsx";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <section className="multicolumn">
          <div className="left"></div>

          <div className="middle">
            <span className="footer-contact">
              <Contact />
            </span>
          </div>

          <div className="right">
            <ProfileCard />
          </div>
          <div className="middle"></div>
        </section>
        <div className="footer-nav">
          <Navbar />
          <span className="footer-bottom">
            <ThemeToggle />
            <span className="clock">
              <Clock />
            </span>
            <span className="copyright">
              &copy; 2025 - <i className="fa-solid fa-infinity"></i>{" "}
              <span className="signature">trilliams</span>
            </span>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
