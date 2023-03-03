import React from "react";
import MainContent from "../MainContent/MainContent";
import AboutUs from "../AboutUs/AboutUs";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-content">
          {/* <h1 className="hero-text">
            “Don’t let the fear of losing be greater than the excitement of
            winning.” – Robert Kiyosaki
          </h1> */}
          <h1 className='hero-text'>POSLOVNO SAVETOVANJE I RAČUNOVODSTVENE USLUGE</h1>
        </div>
      </div>
      <MainContent />
      <AboutUs/>
    </>
  );
};

export default HomePage;
