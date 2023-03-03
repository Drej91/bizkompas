import React from "react";
import "./MainContent.css";
import Feniks from '../../assets/logos/Feniks358.png';
import MainServices from '../MainServices/MainServices';

const MainContent = () => {
  return (
    <div className="mainContent-wrapper">
      <p className="mainContentTitle">Konsultantske i Računovodstvene Usluge</p>
      <div className="mainContentDiv">
        <MainServices/>
      </div>
      <div className="middleContentWrapper">
        <div className="middleImageDiv">
          <div className='onImageText'>
          <p className="regular">
            ZAINTERESOVANI ZA SARADNJU?
          </p>
          <div className='contact-us-wrapper'>
          <span style={{color: 'black', fontSize: '24px', fontFamily: 'Outfit'}}>Kontaktirajte nas</span>
          <a href="mailto:office@bizkompas.rs" className='contact-us-btn'>office@bizkompas.rs</a>
          </div>
          </div>
        </div>
      </div>
      <p className="mainContentTitle" style={{marginBottom: 0}}>Biznis Podrška</p>
      <div className="lower-content-wrapper">
      <p className="regular justify text">
      Bizkompas nastoji da kroz istraživanje tržišta kreira asortiman poslovnih saradnika koji u svojoj ponudi imaju najbolju uslugu i dobra, po najpristupačnijim cenama. Naš cilj je da klijentima omogućimo kvalitetnu ponudu preduzeća iz različitih poslovnih delatnosti i time im olakšamo prilikom selekcije dobavljača kroz proces nabavke.
      </p>
      <div id='lower-content' className="lowerContent">
        <div className="lowerCard">
          <div className="lower-card-logo-wrapper"><img className="lower-card-logo" alt={"Feniks"} src={Feniks} /></div>
          <div className="lower-card-content">
            <p>
              <strong>Agencija Feniks 358</strong> knjigovodstvena agencija specijalizovana za rad sa mikro i malim biznisima. Njihov kadar odlikuje spoj mladosti i iskustva, a njihova poslovna politika je modernizacija knjigovodstvenih i administrativnih procesa sa ciljem da svojim klijentima donese uštedu i sigurnost u poslovanju.
            </p>
            <p>Ukoliko ste zainteresovani za saradnju, možete poslati upit na email adrese: <strong>office@feniks358.rs</strong> ili <strong>office@bizkompas.rs</strong></p>
          </div>
        </div>
        <div className="lowerCard">
          <div className="lower-card-logo-wrapper"><img className="lower-card-logo" src={Feniks} /></div>
          <div className="lower-card-content">
            <p>
              Advokat Igor M. Vukašinović je specijalizovan za pravno zastupanje prilikom prekršajnih i krivičnih sudskih postupaka, zastupanje pravnih lica i naknade svih vrsta šteta iz oblasti saobraćaja. Svoju advokatsku karijeru je gradio od Javnog Tužilaštva, preko Privrednog suda do saradnje sa velikim advokatskim kancelarijama čime je stekao neprocenjivo iskustvo potrebno za rešavanje kompleksnih sudskih procesa u oblastima trgovinskog prava, krivičnog i prekršajnog prava, a posebno u postupcima za naknadu štete iz saobraćaja.</p>
            <p>Ukoliko ste zainteresovani za saradnju, možete poslati upit na email adrese: <strong>igorvuksanovic.lawoffice@gmail.com</strong> ili <strong>office@bizkompas.rs</strong></p>
          </div>
        </div>
        <div className="lowerCard">
          <div className="lower-card-logo-wrapper"><img className="lower-card-logo" src={Feniks} /></div>
          <div className="lower-card-content">
            <p>
              <strong>Agencija Feniks 358</strong> knjigovodstvena agencija specijalizovana za rad sa mikro i malim biznisima. Njihov kadar odlikuje spoj mladosti i iskustva, a njihova poslovna politika je modernizacija knjigovodstvenih i administrativnih procesa sa ciljem da svojim klijentima donese uštedu i sigurnost u poslovanju.
            </p>
            <p>Ukoliko ste zainteresovani za saradnju, možete poslati upit na email adrese: office@feniks358.rs ili office@bizkompas.rs</p>
          </div>
        </div>
        <div className="lowerCard">
          <div className="lower-card-logo-wrapper"><img className="lower-card-logo" src={Feniks} /></div>
          <div className="lower-card-content">
            <p>
              <strong>Agencija Feniks 358</strong> knjigovodstvena agencija specijalizovana za rad sa mikro i malim biznisima. Njihov kadar odlikuje spoj mladosti i iskustva, a njihova poslovna politika je modernizacija knjigovodstvenih i administrativnih procesa sa ciljem da svojim klijentima donese uštedu i sigurnost u poslovanju.
            </p>
            <p>Ukoliko ste zainteresovani za saradnju, možete poslati upit na email adrese: office@feniks358.rs ili office@bizkompas.rs</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MainContent;
