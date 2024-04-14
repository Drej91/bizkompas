import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about-us" className="aboutUscontainer">
      <div className="content">
        <p className="title-about-us">O Nama</p>
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
          <p className="regular about-us-text" style={{ color: "#31ABE0" }}>
            Edukujte se blagovremeno, budite spremni!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
