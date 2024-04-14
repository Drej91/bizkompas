import React from "react";
import "./MainServices.css";
import Image from "../UI/Image/Image";
import { Link } from "react-router-dom";
import cenovnik from "../../assets/Bizkompas-Cenovnik.pdf";

const mainServices = [
  {
    id: 1,
    title: "PRAVNI POSLOVI",
    desc: "Usaglasite vašu poslovnu dokumentaciju u skladu sa Zakonom i zaštitite vaše interese. Pored pripreme dokumenata, naš asortiman usluga obuhvata i obavljanje poslovnih procedura u vaše ime pri institucijama.",
    imgName: "poreski_konsalting",
  },
  {
    id: 2,
    title: "TRŽIŠNI POSLOVI",
    desc: "Upoznajte se na vreme sa problemima i prilikama na tržištu. Neke od usluga tržišnih poslova koje nudimo su analiza konkurencije i pozicioniranja na tržištu, kao i M&A usluge.",
    imgName: "poreski_konsalting",
  },
  {
    id: 3,
    title: "RAČUNOVODSTVENO-FINANSIJSKI POSLOVI",
    desc: "Brojevi su ogledalo poslovanja i oni vam mogu pomoći da vodite i razvijate vaš biznis. Profesionalno vođenje poslovnih knjiga i izrada finansijskih analiza i izveštaja samo su neke usluga računovodstveno-finansijskih poslova koje obavljamo.",
    imgName: "kontrola_troskova",
  },

  {
    id: 4,
    title: "PORESKI POSLOVI",
    desc: "Blagovremeno se edukujte i obezbedite poreske uštede u poslovanju. Asortiman poreskih poslova obuhvataju usluge poput savetovanja, poreskih obračuna i tumačenja propisa vezanih za obračun poreza.",
    imgName: "poreski_konsalting",
  },
];

const MainServices = () => {
  return (
    <div id="main-services" className="main-services-wrapper">
      <div className="main-services-content-wrapper">
        {mainServices.map((service) => {
          return (
            <div className="main-services-card" key={service.id}>
              <Image fileName={service.imgName} />
              <div className="main-services-card-right">
                <p className="main-services-title">{service.title}</p>
                <p className="main-services-desc">{service.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={cenovnik} target="_blank" download className="price-btn">
        Asortiman Usluga
      </Link>
    </div>
  );
};

export default MainServices;
