import React from "react";
import "./LowerNavigation.css";
import { Link } from "react-router-dom";


const LowerNavigation = () => {
  return (
    <div className="lowerNavigationWrapper">
      <Link to="../../../public/Cenovnik.pdf" target="_blank" download>
        <p>Konsultantske usluge</p>
      </Link>
      <Link to="../../../public/Cenovnik.pdf" target="_blank" download>
        <p>Računovodstvene usluge</p>
      </Link>
      <Link to="../../../public/Cenovnik.pdf" target="_blank" download>
        <p>Biznis podrška</p>
      </Link>
      <Link to="../../../public/Cenovnik.pdf" target="_blank" download>
        <p>Ostale usluge</p>
      </Link>
    </div>
  );
};

export default LowerNavigation;
