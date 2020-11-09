import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-div">Left</div>
      <div className="center-div">
        <p>Bizkompas</p>
      </div>
      <div className="right-div">
        <a href="mailto:ceganjac.miodrag@gmail.com">
          <p className="emailFotter">ceganjac.miodrag@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
