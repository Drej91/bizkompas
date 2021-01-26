import React from "react";
import "../UsefulLinks/UsefulLinks.css";

const UsefulLinks = () => {
  return (
    <div className="container">
      <div className="titleContainer">
        <p className="h2 bold">Korisni linkovi</p>
        <p>
          Ovde možete pronaći neke od korisnih linkova koji će vam pomoći
          prilikom otvaranja ili vođenja vašeg biznisa.
        </p>
      </div>
      <div className="linksWrapper">
        <div className="singleLinkWrapper">
          <p className="h4 bold">Poreska uprava:</p>
          <p className="regular">
            <a href="https://www.purs.gov.rs/">www.purs.gov.rs</a>
          </p>
        </div>
        <div className="singleLinkWrapper">
          <p className="h4 bold">Poreska uprava - PIB registar:</p>
          <p className="regular">
            <a href="https://www.purs.gov.rs/pib.html">
              www.purs.gov.rs/pib.html
            </a>
          </p>
        </div>
        <div className="singleLinkWrapperLast">
          <p className="h4 bold">Poreska uprava - Kontakt centar:</p>
          <p className="regular">
            <a href="https://www.purs.gov.rs/kontakt/kontakt-centar.html">
              www.purs.gov.rs/kontakt/kontakt-centar.html
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
