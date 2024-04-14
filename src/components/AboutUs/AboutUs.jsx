import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about-us" className="aboutUscontainer">
      <div className="content">
        <p className="title-about-us">O Nama</p>
        <div></div>
        <div className="aboutUsTextWrapper">
          <p className="regular about-us-text">
            Bizkompas je osnovan 2020. godine i u svom poslovanju nastoji da
            kroz raznovrsni asortiman pravnih, tržišnih,
            računovodstveno-finansijskih i poreskih poslova obezbedi svojim
            klijentima poslovnu podršku potrebnu za pokretanje, rast i razvoj
            njihovog biznisa. Naša vizija je olakšanje poslovanja klijentima, i
            u tom cilju, Bizkompas je pored asortimana ponuđenih usluga
            uspostavio i saradnju sa preduzećima iz različitih delatnosti koji
            su takođe u ponudi našim klijentima.
          </p>
          {/* <p className="regular about-us-text">
            Iskustvo u radu sa desetinama preduzeća, tokom 5 godina, pokazalo je
            da se neretko previdi mogućnost povećanja efikasnosti u sektorima
            koji ne utiču direktno na prodaju dobara ili usluga. Menadžment
            preduzeća neretko nema viziju da svi sektori preduzeća čine
            neophodne karike lanca procesa poslovanja, kao i da se svim
            sektorima preduzeća mora upravljati i težiti efikasnosti, od prodaje
            do administracije i računovodstva.
          </p> */}
          <p className="regular about-us-text" style={{ color: "#31ABE0" }}>
            Edukujte se blagovremeno, budite spremni!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
