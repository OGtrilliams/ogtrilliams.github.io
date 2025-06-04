import React, { useLayoutEffect } from "react";
import { FaMoneyBill, FaPaypal } from "react-icons/fa6";

const Donate = () => {
  const links = [
    {
      id: "ca",
      title: "Cashapp",
      icon: <FaMoneyBill />,
      url: "https://cashapp.com/hauntednursery",
    },
    {
      id: "pp",
      title: "Paypal",
      icon: <FaPaypal />,
      url: "#",
    },
    { id: "etc", title: "dontRemember", url: "#" },
  ];
  return (
    <>
      <div className="donate-container">plz gib kthnx</div>
      {links.map((li) => (
        <ul className="donations" key={li.id}>
          <li key={li.id}>
            <a href={li.url} target="_blank" rel="noopener noreferrer">
              {li.icon} {li.title}
            </a>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Donate;
