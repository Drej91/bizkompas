import React from "react";
import "./MainContent.css";
import { FaBook, FaBeer } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className="mainContent-wrapper">
      <h3>Konsultantske usluge</h3>
      <div className="mainContentDiv">
        <div className="upperContent">
          <div class="upperCard">
            <div className="iconWrapper">
              <FaBook className="iconsMainScreen" />
            </div>
            <div className="cardTitleWrapper">
              <p>Knjigovodstvene procedure</p>
            </div>
          </div>
          <div class="upperCard">
            <div className="iconWrapper">
              <FaBeer className="iconsMainScreen" />
            </div>
            <div className="cardTitleWrapper">
              <p>Analize poslovanja</p>
            </div>
          </div>
          <div class="upperCard">
            <div className="iconWrapper">
              <FaBeer className="iconsMainScreen" />
            </div>
            <div className="cardTitleWrapper">
              <p>Kontrola troškova</p>
            </div>
          </div>
          <div class="upperCard">
            <div className="iconWrapper">
              <FaBeer className="iconsMainScreen" />
            </div>
            <div className="cardTitleWrapper">
              <p>Kadrovska organizacija</p>
            </div>
          </div>
          <div class="upperCard">
            <div className="iconWrapper">
              <FaBeer className="iconsMainScreen" />
            </div>
            <div className="cardTitleWrapper">
              <p>Poreski konsalting</p>
            </div>
          </div>
          <div class="upperCard">
            <div className="iconWrapper">
              <FaBeer className="iconsMainScreen" />
            </div>
            <div className="cardTitleWrapper">
              <p>Administrativna efikasnost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
