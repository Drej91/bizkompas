import React from "react";
import MainContent from "../MainContent/MainContent";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>Dobrodosli na nas sajt</h1>
        </div>
      </div>
      <MainContent />
    </div>
  );
};

export default HomePage;
