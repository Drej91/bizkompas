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
      <p className="h3 bold mainContentTitle">KONSULTANTSKE USLUGE</p>
      <div className="mainContentDiv">
        <div className="upperContentWrapper">
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
      <p className="h3 bold mainContentTitle">BIZNIS PODRŠKA</p>
      <p>
        U cilju efikasnije poslovne logistike preduzeća, klijentima su na
        raspolaganju usluge poslovnih partnera iz oblasti:
      </p>
      <div className="lowerContent">
        <div className="lowerCard">
          <img src={Accountant} alt="Accountant" className="categoryImage" />
          <p className="h4 subtitles">Računovodstvene usluge</p>
        </div>
        <div className="lowerCard">
          <img src={WebDesign} alt="Accountant" className="categoryImage" />
          <p className="h4 subtitles">Izrada web sajtova i aplikacija</p>
        </div>
        <div className="lowerCard">
          <img src={Cosmetics} alt="Cosmetics" className="categoryImage" />
          <p className="h4 subtitles">Nabavka sredstava za hemiju</p>
        </div>
        <div className="lowerCard">
          <img src={Marketing} alt="Marketing" className="categoryImage" />
          <p className="h4 subtitles">Online marketing</p>
        </div>
        <div className="lowerCard">
          <img src={Dictionary} alt="Dictionary" className="categoryImage" />
          <p className="h4 subtitles">Usluge prevođenja – engleski jezik</p>
        </div>
        <div className="lowerCard">
          <img src={Taxi} alt="Taxi" className="categoryImage" />
          <p className="h4 subtitles">Taksi prevoz</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
