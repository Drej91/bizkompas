import React from 'react'
import './MainServices.css';
import Image from '../UI/Image/Image';
import { Link } from "react-router-dom";
import cenovnik from '../../assets/Bizkompas-Cenovnik.pdf';

const mainServices = [
  {id: 1, title: "Knjigovodstvene Procedure", desc: "Organizujte knjigovodstvo u skladu sa zakonom", imgName: 'knjigovodstvene_procedure'},
  {id: 2, title: "Poreski Konsalting", desc: "Porezi se moraju platiti, ali se može i uštedeti", imgName: 'poreski_konsalting'},
  {id: 3, title: "Analize Poslovanja", desc: "Proverite profitabilnost i efikasnost vašeg poslovanja", imgName: 'analiza_poslovanja'},
  {id: 4, title: "Kadrovska organizacija", desc: "Obezbedite efikasnost uz zadovoljstvo vaših kadrova", imgName: 'kadrovska_organizacija'},
  {id: 5, title: "Kontrola troškova", desc: "Previsoki troškovi mogu ugroziti poslovanje, stoga je neophodno kontrolisati ih", imgName: 'kontrola_troskova'},
  {id: 6, title: "Administrativna Efikasnost", desc: "Uštedite vreme gde god je to moguće", imgName: 'efikasnost_poslovanja'},

]

const MainServices = () => {
  return (
    <div id='main-services' className='main-services-wrapper'>
      <div className='main-services-content-wrapper'>
        {mainServices.map(service => {
          return <div className='main-services-card' key={service.id}>
              <Image fileName={service.imgName}/>
              <div className='main-services-card-right'>
              <p className='main-services-title'>{service.title}</p>
              <p className='main-services-desc'>{service.desc}</p>
              </div>
          </div>
        })}
      </div>
      <Link to={cenovnik} target="_blank" download className='price-btn'>Cenovnik usluga</Link>
    </div>
  )
}

export default MainServices;