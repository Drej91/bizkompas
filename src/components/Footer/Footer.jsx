import React from "react";
import "./Footer.css";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import footerLogo from "../../assets/logos/bizkompasLogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upperLevelFooter">
        <div className="left-div">
          <img className="footer-logo" src={footerLogo} alt="logo" />
          <div className="socialMediaIconsWrapper">
            {/* <a
              href="https://www.facebook.com/profile.php?id=100079910030514"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook className="socialMediaIcon" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/bizkompas/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="socialMediaIcon" />
            </a>
            <a
              href="https://www.instagram.com/bizkompas/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="socialMediaIcon" />
            </a>
          </div>
        </div>
        <div className="middle-div">
          <p className="middle-div-text bold">Kontakt:</p>
          <p className="middle-div-text m0">Adresa:</p>
          <p className="regular m0 justify">
            Beograd, Milana Blagojevića Španca 13
          </p>
          {/* <p className="middle-div-text m0 mt1">Email:</p> */}
          {/* <div className="footerContactWrapper"> */}
          {/* <AiOutlineMail /> */}
          {/* <a href="mailto:office@bizkompas.rs">
            <p className="emailFotter middle-div-text m0 bold">
              office@bizkompas.rs
            </p>
          </a> */}
          {/* </div> */}
        </div>
        <div className="right-div">
          <div className="timeWrapper">
            <p className="regular title">Radno vreme</p>
            <p className="regular" style={{ float: "left" }}>
              Ponedeljak
            </p>
            <p className="regular" style={{ float: "right" }}>
              10:00 - 18:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Utorak
            </p>
            <p className="regular" style={{ float: "right" }}>
              10:00 - 18:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Sreda
            </p>
            <p className="regular" style={{ float: "right" }}>
              10:00 - 18:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Četvtrak
            </p>
            <p className="regular" style={{ float: "right" }}>
              10:00 - 18:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Petak
            </p>
            <p className="regular" style={{ float: "right" }}>
              10:00 - 18:00
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-div">
        <p className="regular">
          {new Date().getFullYear()} All right reserved – Bizkompas
        </p>
        <p className="regular">Created by Mrveks</p>
      </div>
    </div>
  );
};

export default Footer;
