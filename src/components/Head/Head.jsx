import React from "react";
import "./Head.css";
import Clock from "../Functions/Clock";

const Head = () => {
  return (
    <>
      <div className="title div1">
        <h1 className="header">Hello World</h1>
        <div className="clock ">
          trilliams.sh
          <Clock />
        </div>
      </div>
    </>
  );
};

export default Head;
