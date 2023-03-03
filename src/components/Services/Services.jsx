import React from "react";
import "../Services/Services.css";

const Services = () => {
  const data = [
    {
      title: "Knjigovodstvene procedure",
      description:
        "Da bi se poslovne promene preduzeća evidentirale na tačan i efikasan način, potrebno je jasno definisati knjigovodstvene procedure. Pogrešno iskazani knjigovodstveni podaci mogu prouzrokovati dalje greške u radu menadžmenta ili drugih sektora preduzeća koji ove podatke svakodnevno koriste. Kontaktirajte nas ukoliko želite konsultantske akvinosti u vezi definisanja i pisanja knjigovodstvenih procedura.",
    },
    {
      title: "Analize poslovanja",
      description:
        "Prilikom planiranja strategija poslovanja za buduće periode, najpre je potrebno uraditi analizu poslovanja prethodnih perioda. Na osnovu analiziranih podataka, dobijaju se parametri na osnovu koji se mogu meriti uspešnost poslovanja u budućem periodu. Kontaktirajte nas ukoliko želite da vam uradimo analizu poslovanja preduzeća koristeći neku od metoda finansijskih analiza.",
    },
    {
      title: "Kontrola troškova",
      description:
        "Za preduzeće je jako bitno da vodi računa o troškovima i rashodima poslovanja. Pored fiksnih troškova i rashoda koji se mogu sa pouzdanjem predvideti u budućem periodu, preduzeće može imati i varijabilne troškove i rashode koji se mogu pojaviti, a bitno uticati na rentabilnost poslovanja preduzeća. Kontaktirajte nas ukoliko želite da vam kroz konsultantsku aktivnost omogućimo da steknete bolji uvid u tekuće i potencijalne troškove i rashode poslovanja.",
    },
    {
      title: "Kadrovska organizacija",
      description:
        "Svako preduzeće teži da na što efikasniji način iskoristi svoje kadrove. Međutim, imajući u vidu da upravo od kadrova u najvećoj meri zavisi uspešnost poslovanja, kadrovska organizacija spada u možda najteži segmet poslovanja gde se neretko mogu pojaviti i neki nepredvidivi i neočekivani ljudski faktori koji značajno mogu uticati na efikasnost poslovanja preduzeća.Kontaktirajte nas ukoliko želite uslugu konsultacije u pogledu kreiranja balansa između zadovoljstva kadrova i uspešnosti poslovanja preduzeća.",
    },
    {
      title: "Poreski konsalting",
      description:
        "Koliko je bitna činjenica da preduzeće mora voditi računa o visini poreza koje plaća, najbolje pokazuje da neretko nepotrebno više plaćeni porezi mogu negativno uticati na tekuću likvidnost preduzeća, pa i u retkim slučajevima čak i na samo poslovanje preduzeća. Sa druge strane, poreske uštede mogu omogućiti preduzeću dodatna finansijska sredstva koja menadžment može iskoristiti na najbolji način i omogućisti efikasnije poslovanje preduzeća. Kontaktirajte nas ukoliko želite da se posavetujete i eventualno izbegnete potencijalnu pojavu plaćanja nepotrebnog poreza.",
    },
    {
      title: "Administrativna efikasnost",
      description:
        "Moderno poslovanje danas je gotovo nemoguće zamisliti bez dobro organizovane administracije. Loše organizovana administracija može dovesti do pojave pogrešno utrošenog radnog vremena kadrova koja dalje može uticati na efiksanost poslovanja. Stoga preduzeća trebaju težiti što većoj administrativnoj efikasnosti.Kontaktirajte nas ukoliko želite da vam pomognemo da na što efikasniji način organizujete vaše administrativne aktivnosti.",
    },
  ];
  return (
    <>
      <div className="contentWrapper">
        <p className="title h3 bold">Usluge i cene</p>
        <div className="priceWrapper">
          {data.map((val, index) => {
            return (
              <div key={index} className="singleServiceWrapper">
                <p className="serviceTitle h3 bold">{val.title}</p>
                <p className="left-align serviceDescription">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="title h3">Cenovnik konsalting usluga</p>
        <div className="lowerPriceWrapper">
          <p>Cena usluga po radnom času:</p>
          <table className="table">
            <thead>
              <tr>
                <th>Kontaktno (uzivo)</th>
                <th>Bezkontaktno (email)</th>
                <th>Bezkontaktno (online sastanak)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Po radnom času / 2.700,00 rsd</td>
                <td>Po email-u / od 1.000,00 rsd do 2.000,00</td>
                <td>Po radnom času / 2.000,00 rsd</td>
              </tr>
            </tbody>
          </table>
          <p>Paketi usluga na mesečnom nivou:</p>
          <div className="flex flex-justify packet">
            <div className="md-col-3 align-top">
              <div className="p2 border rounded cards">
                <h1 className="h2 mt0">Know-how low paket</h1>
                <p className="mb0">
                  Okvirna bezkontaktna mesečna dostupnost do 20 radnih časova.
                  Pošaljite upit radi formiranja cene usluge.
                </p>
              </div>
            </div>
            <div className="md-col-3">
              <div className="p2 border rounded cards">
                <h1 className="h2 mt0">Know-how mid paket</h1>
                <p className="mb0">
                  Okvirna bezkontaktna mesečna dostupnost do 50 radnih časova.
                  Pošaljite upit radi formiranja cene usluge.
                </p>
              </div>
            </div>
            <div className="md-col-3">
              <div className="p2 border rounded cards">
                <h1 className="h2 mt0">Know-how high paket</h1>
                <p className="mb0">
                  Okvirna bezkontaktna mesečna dostupnost do 80 radnih časova.
                  Pošaljite upit radi formiranja cene usluge.
                </p>
              </div>
            </div>
          </div>
          <br />
          <p>
            Ukoliko smatrate da vam je potrebna usluga drugačije vrste koja nije
            definisana cenovnikom, pošaljite upit, a mi ćemo vam poslati ponudu
            u što kraćem roku.
          </p>
        </div>
        <p className="title h3">Biznis podrška</p>
        <br />
        <div className="flex flex-column pb3">
          <p className="regular ml4 mr4 justify h4">
            Bizkompas nastoji da svojim klijentima olakša poslovnu logistiku i
            obezbedi osnovna dobra i usluge koja su preduzećima potrebna u
            svakodnevnom poslovanju. Ukoliko su vam potrebne usluge ili dobra iz
            oblasti delatnosti naših poslovnih partnera, pošaljite upit, a mi
            ćemo vam poslati odgovor ili ponudu u što kraćem roku.
          </p>
          <div className="aboutOtherServicesWrapper p3">
            <div className="singleOtherServiceWrapper">
              <p className="h4">Računovodstvene usluge:</p>
              <p>- Vođenje knjiga preduzeća</p>
              <p>- Kadrovski i ostali obračuni</p>
              <p>- Izrada završnog računa</p>
              <p>- Osnivanje preduzeća</p>
              <p>- Izveštavanje o poslovanju</p>
            </div>
            <div className="singleOtherServiceWrapper">
              <p className="h4">Izrada web sajtova i aplikacija</p>
              <p>- Izrada web sajta koristeći postojeće šablone sa interneta</p>
              <p>- Izrada web sajta po nacrtu klijenta</p>
              <p>- Održavanje web sajta </p>
              <p>- Izrada mobilne aplikacije</p>
            </div>
            <div className="singleOtherServiceWrapper">
              <p className="h4">Nabavka sredstava za hemiju</p>
              <p>- Ukoro na sajtu</p>
            </div>
            <div className="singleOtherServiceWrapper">
              <p className="h4">Online marketing</p>
              <p>- Ukoro na sajtu</p>
            </div>
            <div className="singleOtherServiceWrapper">
              <p className="h4">Usluge prevođenja – engleski jezik</p>
              <p>- Ukoro na sajtu</p>
            </div>
            <div className="singleOtherServiceWrapper">
              <p className="h4">Taksi vangradski prevoz</p>
              <p>- Vožnja u jednom pravcu, cena 0,7 eur po KM</p>
              <p>- Vožnja u oba pravca, cena 0,5 eur po KM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
