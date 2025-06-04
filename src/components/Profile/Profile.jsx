import React from "react";
import with_goggy from "../../assets/withgoggy.png";
import { FaCheck, FaX } from "react-icons/fa6";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <h3>Dear bestie,</h3> <br />
      <p>How are you? I am fine.</p>
      <div className="container">
        <br />
        <div className="card">
          <img src={with_goggy} alt="" />
          <div className="asl">
            <h3>A-S-L</h3>
          </div>
          <div className="work-history">
            <h4>Current Role</h4>
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
          <div className="links">links</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
