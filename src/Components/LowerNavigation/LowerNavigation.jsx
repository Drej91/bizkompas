import React from "react";
import "./LowerNavigation.css";
import { Link } from "react-router-dom";
import pdfForDownload from '../../assets/Cenovnik-official.pdf'



const LowerNavigation = () => {
  return (
    <div className="lowerNavigationWrapper">
      <Link to={pdfForDownload} target="_blank" download>
        <p>Konsultantske usluge</p>
      </Link>
      <Link to={pdfForDownload} target="_blank" download>
        <p>Računovodstvene usluge</p>
      </Link>
      <Link to={pdfForDownload} target="_blank" download>
        <p>Biznis podrška</p>
      </Link>
      <Link to={pdfForDownload} target="_blank" download>
        <p>Ostale usluge</p>
      </Link>
    </div>
  );
};

export default LowerNavigation;
