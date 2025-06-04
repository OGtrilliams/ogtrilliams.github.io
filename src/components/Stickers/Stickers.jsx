import React from "react";
import { FaStar } from "react-icons/fa6";
import "./Stickers.css";
const Stickers = () => {
  return (
    <>
      <div className="div5"></div>
      <div className="folded-rectangle"></div>
      <div className="stars">
        <h2>Good Job!</h2>
        <span className="star ">
          <FaStar />
        </span>
        <span className="star">
          <FaStar />
        </span>
        <span className="star rainbow ">
          <FaStar />
        </span>{" "}
        <span className="star ">
          <FaStar />
        </span>
        <span className="star ">
          <FaStar />
        </span>
      </div>
    </>
  );
};

export default Stickers;
