import React from "react";
import "./SubscriptionCards.css";

const SubscriptionCards = () => {
  return (
    <div>
      <h1>Paketi Biznis Podrške</h1>
      <div className="cards">
        <article className="information [ card ]">
          <span className="tag">LOW</span>
          <h2 className="title">Do 8 radnih sati</h2>
          {/* <p className="info">
            Elemenatary tracks all the events for the day as you scheduled and
            you will never have to worry.
          </p> */}
        </article>
        <article className="information [ card ]">
          <span className="tag">MEDIUM</span>
          <h2 className="title">Do 20 radnih sati</h2>
          {/* <p className="info">
            Elemenatary tracks all the events for the day as you scheduled and
            you will never have to worry.
          </p> */}
        </article>
        <article className="information [ card ]">
          <span className="tag">HIGH</span>
          <h2 className="title">Do 40 radnih sati</h2>
          {/* <p className="info">
            Elemenatary tracks all the events for the day as you scheduled and
            you will never have to worry.
          </p> */}
        </article>
        <article className="information [ card ]">
          <span className="tag">CUSTOM</span>
          <h2 className="title">Paket po dogovoru</h2>
          {/* <p className="info">
            Elemenatary tracks all the events for the day as you scheduled and
            you will never have to worry.
          </p> */}
        </article>

        {/* </article> */}
        {/* <article className="information [ card ]">
          <h2 className="title">The only tool you need to schedule your day</h2>
          <p className="info">
            Always keep updated with this simple tool on the go, when and where
            ever you need.
          </p>
          <dl className="details">
            <div>
              <dt>Satisfaction</dt>
              <dd>100%</dd>
            </div>
            <div>
              <dt>Customers</dt>
              <dd>4.5K</dd>
            </div>
          </dl>
        </article> */}
      </div>
      <p style={{ fontSize: "20px" }}>
        Na raspolaganju su mesečni paketi usluga koji obuhvataju fond radnih
        sati koji se može iskoristiti za usluge iz domena pravnih, tržišnih,
        računovodsveno-finansijskih i poreskih poslova.
      </p>
    </div>
  );
};

export default SubscriptionCards;
