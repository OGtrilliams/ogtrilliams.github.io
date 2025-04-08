import React from "react";
import with_goggy from "../../assets/withgoggy.png";
import { FaCheck, FaHeart, FaX } from "react-icons/fa6";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="asl">
            <h3>A-S-L</h3>
            <img src={with_goggy} alt="" />{" "}
            <ul>
              <li>
                Name: trilliams
                <FaHeart />
              </li>
              <li>Age: old</li>
              <li>Location: NY</li>
            </ul>
          </div>
          <div className="work-history">
            <h3>Work History</h3>
            <s>
              <p>
                <span className="x-mark">
                  <FaX />
                </span>
                Linux Systems administrator
              </p>
            </s>
            <s>
              <p>
                <span className="x-mark">
                  <FaX />
                </span>
                Online instructor
              </p>
            </s>
            <s>
              <p>
                <span className="x-mark">
                  <FaX />
                </span>
                Community Manager
              </p>
            </s>
            <s>
              <span className="x-mark">
                <FaX />
              </span>
              Dev Avocado
            </s>

            <p>
              <span className="check">
                <FaCheck />
              </span>
              <mark>Frontend developer</mark>
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="status">
            <h3>Open to work</h3>
            <p>Looking for freelance opportunities - Inquire now!</p>
            <p>NOT willing to relocate or travel</p>
          </div>
          <div className="portfolio">
            <h3>Previous work:</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
