import { useState } from "react";
const emailDiv = document.getElementById("email");
const otherDiv = document.querySelector(".email-nav");
const decryptedTxt = "hello at trilliams dot sh";

const EmailReveal = () => {
  const [showEmail, setShowEmail] = useState(false);
  const handleClick = () => {
    // setShowEmail(true); /* or setShowEmail("show") */
    return myEmail();
  };

  function myEmail() {
    console.log("my mail");
    setShowEmail("decryptedTxt");
  }

  return (
    <p onClick={handleClick} className={showEmail ? "show" : ""}>
      {showEmail ? decryptedTxt : "click here"}
    </p>
  );
};

export default EmailReveal;
