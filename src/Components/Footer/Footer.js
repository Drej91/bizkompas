import React from "react";
import "./Footer.css";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upperLevelFooter">
        <div className="left-div">
          <p className="regular  m0">Bizkompas</p>
          <br />
          <p className="regular  m0 justify">
            Beograd, Milana Blagojevića Španca 13
          </p>
          <div className="footerContactWrapper">
            <AiOutlineMail />
            <a href="mailto:office@bizkompas.rs">
              <p className="emailFotter ">office@bizkompas.rs</p>
            </a>
          </div>
          {/* <div className="footerContactWrapper">
            <AiTwotonePhone />
            <a href="tel:+381 64 3408828">
              <p className="regular  m0">+381 64 3408828</p>
            </a>
          </div> */}
          <div className="socialMediaIconsWrapper">
            <a href="#">
              <AiFillFacebook className="socialMediaIcon" />
            </a>
            <a href="#">
              <AiFillTwitterCircle className="socialMediaIcon" />
            </a>
            <a href="#">
              <AiFillInstagram className="socialMediaIcon" />
            </a>
          </div>
        </div>
        <div className="right-div">
          <div className="timeWrapper">
            <p className="regular title">Radno vreme</p>
            <p className="regular" style={{ float: "left" }}>
              Ponedeljak
            </p>
            <p className="regular" style={{ float: "right" }}>
              08:00 - 16:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Utorak
            </p>
            <p className="regular" style={{ float: "right" }}>
              08:00 - 16:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Sreda
            </p>
            <p className="regular" style={{ float: "right" }}>
              08:00 - 16:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Četvtrak
            </p>
            <p className="regular" style={{ float: "right" }}>
              08:00 - 16:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Petak
            </p>
            <p className="regular" style={{ float: "right" }}>
              08:00 - 16:00
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Subota
            </p>
            <p className="regular" style={{ float: "right" }}>
              Ne radimo
            </p>
          </div>
          <div className="timeWrapper">
            <p className="regular" style={{ float: "left" }}>
              Nedelja
            </p>
            <p className="regular" style={{ float: "right" }}>
              Ne radimo
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-div">
        <p className="regular">2020 All right reserved – Bizkompas</p>
        <p className="regular">Created by Mrveks</p>
      </div>
    </div>
  );
};

export default Footer;
