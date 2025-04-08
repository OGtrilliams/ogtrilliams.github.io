import React from "react";
import "./Homepage.css";
import { FaHeart } from "react-icons/fa6";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <p>greetings & salutations</p>
      </div>

      <div className="heartsticker">
        <p>I</p>
        <div className="fa-heart blink">
          <FaHeart />
        </div>
        <p>U XR-2</p>
      </div>
    </>
  );
};

export default Homepage;
