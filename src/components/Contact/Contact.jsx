import React from "react";
// import "./Contact.css";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb958449-7842-42f8-a0d5-306ab949964d");

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
    <>
      <span className="contact-head">
        <span className="txt">Co</span>{" "}
        <i className="fa-solid fa-house-chimney fa-flip-horizontal"></i>
        <span className="txt">tact</span>
        <br /> <div className="divide"></div>
        <br />
      </span>

      <div className="po-box">
        <span className="address">
          <h5>P.O. Box 129</h5>
          <p>Syracuse, New York 13201</p>
        </span>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Enter your name" required />
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Enter your message..."
          required
        ></textarea>
        <button type="submit" className="contact-btn">
          Send now
        </button>
      </form>
      <span>{result} </span>
    </>
  );
};

export default Contact;
