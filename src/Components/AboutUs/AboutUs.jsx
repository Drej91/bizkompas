import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id='about-us' className="aboutUscontainer">
      <div className="content">
        <p className="title-about-us">O Nama</p>
        <div>
        </div>
        <div className="aboutUsTextWrapper">
          <p className="regular about-us-text">
            Bizkompas nastoji da kroz raznovrsni asortiman konsultantskih usluga
            iz domena računovodstva, poreza, finansija i administracije pruži
            podršku u upravljanjima poslovnim procesima svojim klijentima.
            Neretko se upravo u ovim sektorima unutar preuzeća pojavljuju
            nepotrebni troškovi koji dodatno opterećuju profitabilnost preduzeća
            i njegovu sposobnost da generiše kapital poteban za dalje
            investicije i rast na tržištu.
          </p>
          <p className="regular about-us-text">
            Iskustvo u radu sa desetinama preduzeća, tokom 5 godina, pokazalo je
            da se neretko previdi mogućnost povećanja efikasnosti u sektorima
            koji ne utiču direktno na prodaju dobara ili usluga. Menadžment
            preduzeća neretko nema viziju da svi sektori preduzeća čine
            neophodne karike lanca procesa poslovanja, kao i da se svim
            sektorima preduzeća mora upravljati i težiti efikasnosti, od prodaje
            do administracije i računovodstva.
          </p>
          <p className="regular about-us-text" style={{color: '#31ABE0'}}>Edukujte se blagovremeno, budite spremni!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
