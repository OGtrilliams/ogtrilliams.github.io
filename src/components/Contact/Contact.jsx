import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaEnvelopesBulk,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3e20c475-d65a-477f-8197-077342d44eb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          {" "}
          <i className="fa-icons ">
            <FaEnvelope />
          </i>
          Send me an Email{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <i className="fa-icons">
              <FaGlobe />
            </i>{" "}
            https://trilliams.sh
          </li>
          <li>
            <i className="fa-icons">
              <FaEnvelopesBulk />
            </i>
            <br />
            P.O. Box 129
            <br /> Syracuse, NY 13207 <br /> United States of America
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label>Write your message here:</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message..."
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            <FaPaperPlane /> Send
          </button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  );
};

export default Contact;
