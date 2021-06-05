import React from "react";
import "./LowerNavigation.css";
import { Link } from "react-router-dom";

const LowerNavigation = () => {
  return (
    <div className="lowerNavigationWrapper">
      <Link to="/services">
        <p>Konsalting usluge</p>
      </Link>
      <Link to="/services">
        <p>Biznis podrška</p>
      </Link>
      <Link to="/services">
        <p>Ostale usluge</p>
      </Link>
    </div>
  );
};

export default LowerNavigation;
