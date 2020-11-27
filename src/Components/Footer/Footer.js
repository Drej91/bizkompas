import React from "react";
import "./Footer.css";

const scroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Footer = () => {
  return (
    <div className="footer">
      <div className="left-div">
        <p className="regular footerText m0">
          "All rights reserved by Bizkompas"
        </p>
        <p className="regular footerText m0">Created by Mrveks</p>
      </div>
      <div className="center-div">
        <a
          className="caps h3 text-decoration-none"
          href="/"
          onClick={() => scroll}
        >
          Bizkompas
        </a>
      </div>
      <div className="right-div">
        <a href="mailto:office@bizkompas.rs">
          <p className="emailFotter footerText">office@bizkompas.rs</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
