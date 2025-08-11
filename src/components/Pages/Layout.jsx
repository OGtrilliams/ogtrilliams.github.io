import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

const Layout = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
