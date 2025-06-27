import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul id="ul" className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="#">Gallery</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="#">Misc</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
