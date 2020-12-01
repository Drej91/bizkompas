import React from "react";
import MainContent from "../MainContent/MainContent";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-text">
            “Don’t let the fear of losing be greater than the excitement of
            winning.” – Robert Kiyosaki
          </h1>
        </div>
      </div>
      <MainContent />
    </>
  );
};

export default HomePage;
