import React from "react";
import "./Footer.css";
import { FaInfinity } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="div4">
        <div className="copyright">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} -{" "}
            <span className="infinity">
              <FaInfinity />
            </span>{" "}
            trilliams.sh
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
