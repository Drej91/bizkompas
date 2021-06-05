import React from "react";
import LowerNavigation from "../LowerNavigation/LowerNavigation";
import MainContent from "../MainContent/MainContent";
import "./HomePage.css";

const HomePage = () => {
  // const [quotes, setQuotes] = useState([
  //   {
  //     id: 1,
  //     quoute: `“Don’t let the fear of losing be greater than the excitement of
  // winning.” – Robert Kiyosaki`,
  //   },
  //   {
  //     id: 2,
  //     quoute: `“Some other quote for testing.” – Comi Rumunjesku`,
  //   },
  // ]);

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
      <LowerNavigation />
      <MainContent />
    </>
  );
};

export default HomePage;
