import React from "react";
import "./MainContent.css";
import {
  FaBook,
  FaChartBar,
  FaMoneyBillAlt,
  FaUserCheck,
  FaCalculator,
  FaFile,
} from "react-icons/fa";
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
            <div className="mainContentLeftOption">
              <div className="upperCard leftCards">
                <div className="iconWrapper">
                  <FaBook className="iconsMainScreen" />
                </div>
                <div className="cardTitleWrapper">
                  <p>Knjigovodstvene procedure</p>
                </div>
              </div>
              <p className="mainTextRight">
                Organizujte knjigovodstvo u skladu sa Zakonom
              </p>
            </div>
            <div className="mainContentRightOption">
              <p className="mainContentTextLeft">
                Proverite profitabilnost i efikasnost Vašeg poslovanja
              </p>
              <div className="upperCard rightCards">
                <div className="iconWrapper">
                  <FaChartBar className="iconsMainScreen" />
                </div>
                <div className="cardTitleWrapper">
                  <p>Analize poslovanja</p>
                </div>
              </div>
            </div>
            <div className="mainContentLeftOption">
              <div className="upperCard leftCards">
                <div className="iconWrapper">
                  <FaMoneyBillAlt className="iconsMainScreen" />
                </div>
                <div className="cardTitleWrapper">
                  <p>Kontrola troškova</p>
                </div>
              </div>
              <p className="mainTextRight">
                Previsoki troškovi mogu ugroziti poslovanje
              </p>
            </div>
            <div className="mainContentRightOption">
              <p className="mainContentTextLeft">
                Obezbedite efikasnost uz zadovoljstvo Vaših kadrova
              </p>
              <div className="upperCard rightCards">
                <div className="iconWrapper">
                  <FaUserCheck className="iconsMainScreen" />
                </div>
                <div className="cardTitleWrapper">
                  <p>Kadrovska organizacija</p>
                </div>
              </div>
            </div>
            <div className="mainContentLeftOption">
              <div className="upperCard leftCards">
                <div className="iconWrapper">
                  <FaCalculator className="iconsMainScreen" />
                </div>
                <div className="cardTitleWrapper">
                  <p>Poreski konsalting</p>
                </div>
              </div>
              <p className="mainTextRight">
                Porezi se moraju platiti, ali se može i uštedeti
              </p>
            </div>
            <div className="mainContentRightOption">
              <p className="mainContentTextLeft">
                Uštedite vreme gde god je moguće
              </p>
              <div className="upperCard rightCards">
                <div className="iconWrapper">
                  <FaFile className="iconsMainScreen" />
                </div>
                <div className="cardTitleWrapper">
                  <p>Administrativna efikasnost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middleContentWrapper">
        <div className="middleImageDiv">
          <p className="regular bold h2 onImageText">
            Kontaktirajte nas za više informacija: office@bizkompas.rs
          </p>
        </div>
      </div>
      <p className="h3 bold mainContentTitle">BIZNIS PODRŠKA</p>
      <p className="regular justify text">
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
          <p className="h4 subtitles">Taksi vangradski prevoz</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
