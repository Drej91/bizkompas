import { useState, useRef } from "react";
import "./MainContent.css";
import MainServices from "../MainServices/MainServices";
import SubscriptionCards from "../SubscriptionCards/SubscriptionCards";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "../../context/SnackbarProvider";

const MainContent = () => {
  const defaultFormValue = {
    title: "",
    email: "",
    message: "",
  };
  const [contactData, setContanctData] = useState(defaultFormValue);
  // const [loading, setLoading] = useState(false);
  const { showSnackbar } = useSnackbar();
  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContanctData({
      ...contactData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_ID,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          showSnackbar("Poruka je poslata.");
        },
        (error) => {
          console.log(process.env.EMAILJS_TEMPLATE_ID);
          console.log(error);
          console.log("FAILED...", error.text);
          showSnackbar("Slanje nije uspelo, pokušajte opet.");
        }
      )
      .then(() => {
        // setLoading(false);
        setContanctData(defaultFormValue);
      });
  };
  const disabled =
    !contactData.title.length ||
    !contactData.email.length ||
    !contactData.message.length;
  return (
    <div className="mainContent-wrapper">
      <p className="mainContentTitle">
        Bizkompas nastoji da svojim klijentima obezbedi poslovnu podršku
        potrebnu za pokretanje, rast i razvoj njihovog biznisa. Širok asortiman
        usluga omogućava da na jednom mestu obezbedite poslovna rešenja iz
        domena:
      </p>
      <div className="mainContentDiv">
        <MainServices />
      </div>
      {/* <div className="main-service-list-wrapper">
        <div className="single-service-list-wrapper">
          <h3>Pravni poslovi:</h3>
          <ul>
            <li>Izrada internih akata</li>
            <li>Statusne promene</li>
            <li>
              Izrada Ugovora i druge dokumentacije sa zaposlenima i trećim
              licima
            </li>
            <li>
              Sprovođenje procesa pri Agenciji za privredne registre i drugim
              državnim institucijama
            </li>
            <li>Osnivanje i zatvaranje firmi</li>
            <li>Tumačenje i praćenje promena u propisima</li>
          </ul>
        </div>
        <div className="single-service-list-wrapper">
          <h3>Tržišni poslovi:</h3>
          <ul>
            <li>Realizacija investicija</li>
            <li>
              Procena vrednosti biznisa (Metoda diskontovanih tokova gotovine)
            </li>
            <li>Kupovina i prodaja firmi M&A</li>
            <li>Istraživanje tržišta</li>
            <li>Posredovanje u angažovanju poslovnih saradnika i partnera</li>
          </ul>
        </div>
        <div className="single-service-list-wrapper">
          <h3>Računovodstveno-finansijski poslovi</h3>
          <ul>
            <li>Vođenje poslovnih knjiga</li>
            <li>Finansijske analize i kontrola troškova</li>
            <li>Finansijsko savetovanje</li>
            <li>Izrade biznis planova i drugih stručnih studija</li>
          </ul>
        </div>
        <div className="single-service-list-wrapper">
          <h3>Poreski poslovi:</h3>
          <ul>
            <li>Poreski obračuni i podnošenje poreskih prijavaa</li>
            <li>Poresko savetovanje</li>
            <li>Tumačenje i praćenje u poreskim propisima</li>
          </ul>
        </div>
      </div> */}
      <SubscriptionCards />
      <div className="middleContentWrapper">
        <div className="middleImageDiv">
          <div
            className="contact-form"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <p style={{ fontWeight: "bold", fontSize: "30px", color: "white" }}>
              Pošaljite upit:
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="title"
                placeholder="Naslov"
                value={contactData.title}
                onChange={handleInputChange}
              />
              <textarea
                rows={3}
                name="message"
                placeholder="Poruka"
                value={contactData.message}
                onChange={handleInputChange}
              />
              <input
                disabled={disabled}
                style={{
                  cursor: "pointer",
                  backgroundColor: disabled ? "#f3f3f3" : "white",
                  boxShadow: `5px 5px 5px ${disabled ? "gray" : "black"}`,
                }}
                className="submit-form-btn"
                type="submit"
                value="Pošalji"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
