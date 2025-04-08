import React, { useState } from "react";
import "./Navbar.css";
import {
  FaHashtag,
  FaHouseChimneyWindow,
  FaPaperPlane,
  FaSackDollar,
  FaTv,
  FaUser,
} from "react-icons/fa6";
import Homepage from "../Homepage/Homepage.jsx";
import Contact from "../Contact/Contact.jsx";
import Socials from "../Socials/Socials.jsx";
import Profile from "../Profile/Profile.jsx";
import Donate from "../Functions/Donate.jsx";

const Navbar = () => {
  const tabs = [
    {
      id: "tab1",
      label: "Home",
      content: <Homepage />,
      icon: <FaHouseChimneyWindow />,
    },
    {
      id: "tab2",
      label: "about",
      content: <Profile />,
      icon: <FaUser />,
    },
    {
      id: "tab3",
      label: "Contact",
      content: <Contact />,
      icon: <FaPaperPlane />,
    },
    { id: "tab4", label: "Socials", content: <Socials />, icon: <FaHashtag /> },
    {
      id: "tab5",
      label: "Donate",
      content: <Donate />,
      icon: <FaSackDollar />,
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (id) => {
    setActiveTab(id); // Update the active tab
  };

  return (
    <>
      <div className="div5 nav-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`btn-grad ${
              activeTab === tab.id ? "active" : "disabled"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <div className="leopard">{tab.icon}</div>
          </button>
        ))}
      </div>

      <div className=" div3">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`page-content ${
              activeTab === tab.id ? "page-active" : ""
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
