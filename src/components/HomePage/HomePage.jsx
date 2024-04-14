import React from "react";
import MainContent from "../MainContent/MainContent";
import AboutUs from "../AboutUs/AboutUs";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-text">AGENCIJA ZA POSLOVNI KONSALTING</h1>
        </div>
      </div>
      <MainContent />
      <AboutUs />
    </>
  );
};

export default HomePage;
