import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="div4">
        <div className="copyright">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} -{" "}
            <span className="infinity">∞</span> trilliams.sh
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
