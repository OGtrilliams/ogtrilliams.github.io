import React from "react";
import "./RetroTv.css";
import { FaYoutube } from "react-icons/fa6";

const RetroTv = () => {
  return (
    <>
      <div class="container">
        <div class="antennas">
          <div class="antenna antenna1"></div>
          <div class="antenna antenna2"></div>
        </div>
        <div class="outer-tv">
          <div class="tv">
            <div class="tv-container">
              <div class="screen-container">
                <div class="outer-screen">
                  <div className="yt-icon">
                    {" "}
                    <FaYoutube />
                  </div>
                </div>
              </div>
              <div class="tv-right">
                <div class="buttons">
                  <div class="knob">
                    <div class="dial"></div>
                  </div>
                  <div class="knob rotate">
                    <div class="dial"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RetroTv;
