import React from "react";
import "./MainContent.css";
import { FaBook, FaBeer } from "react-icons/fa";
import Taxi from "../../assets/categoriesImages/Taxi.jpg";
import Accountant from "../../assets/categoriesImages/Accountant.jpg";
import Cosmetics from "../../assets/categoriesImages/Cosmetics.jpg";
import Dictionary from "../../assets/categoriesImages/Dictionary.jpg";
import Marketing from "../../assets/categoriesImages/Marketing.jpg";
import WebDesign from "../../assets/categoriesImages/WebDesign.jpg";

const MainContent = () => {
  return (
    <div className="mainContent-wrapper">
      <h3>KONSULTANTSKE USLUGE</h3>
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
      <h3>BIZNIS PODRŠKA</h3>
      <div className="lowerContent">
        <p>
          U cilju efikasnije poslovne logistike preduzeća, klijentima su na
          raspolaganju usluge poslovnih partnera iz oblasti:
        </p>
        <div className="lowerCard">
          <img src={Accountant} alt="Accountant" className="categoryImage" />
          <p>Računovodstvene usluge</p>
        </div>
        <div className="lowerCard">
          <img src={WebDesign} alt="Accountant" className="categoryImage" />
          <p>Izrada web sajtova i aplikacija</p>
        </div>
        <div className="lowerCard">
          <img src={Cosmetics} alt="Cosmetics" className="categoryImage" />
          <p>Nabavka sredstava za hemiju</p>
        </div>
        <div className="lowerCard">
          <img src={Marketing} alt="Marketing" className="categoryImage" />
          <p>Online marketing</p>
        </div>
        <div className="lowerCard">
          <img src={Dictionary} alt="Dictionary" className="categoryImage" />
          <p>Usluge prevođenja – engleski jezik</p>
        </div>
        <div className="lowerCard">
          <img src={Taxi} alt="Taxi" className="categoryImage" />
          <p>Taksi prevoz</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
