import React from "react";
import "./AboutUs.css";
import aboutUs from "../../assets/Images/aboutUs.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUscontainer">
      <div className="content">
        <h3 className="title">O nama</h3>
        <img src={aboutUs} alt="aboutUs" className="aboutUsImg" />
        <div className="aboutUsTextWrapper">
          <p className="regular">
            Bizkompas je osnovan sa ciljem da kroz konsultacije i edukacije
            drugih preduzeća, podstakne njihov efikasniji rast i razvoj na
            tržištu. Neretko male promene u organizaciji poslovanja mogu da
            donesu veću poslovnu efikasnost preduzeća. Bizkompas nastoji da
            alocira ove promene koristeći univerzalni jezik civilizacije –
            matematiku. Poslovne analize trenutnih i istorijskih raspoloživih
            podataka mogu doprineti budućem povećanju efikasnosti poslovanja.
          </p>
          <p className="regular">
            Bizkompas nastoji i da kroz saradnju sa partnerima, omogući svojim
            klijentima obavljanje usluga računovodstva, nabavke materijala za
            svakodnevno poslovanje, kao i izrade aplikacija i veb sajtova.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
