import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiAlignRight } from "react-icons/bi";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [showLinks, setShowLinks] = useState("");

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-wrapper">
            <Link to="/" className="navbar-logo" onClick={() => setActive("")}>
              <p>Bizkompas</p>
            </Link>
          </div>
          {showLinks === true ? (
            <div className="links-wrapper">
              <Link
                to="/services"
                className={
                  active === "services" ? "active-link" : "navbar-link"
                }
                onClick={() => {
                  setActive("services");
                }}
              >
                <p>Usluge</p>
              </Link>
              <Link
                to="/aboutUs"
                className={active === "aboutUs" ? "active-link" : "navbar-link"}
                onClick={() => {
                  setActive("aboutUs");
                }}
              >
                <p>O nama</p>
              </Link>
              <Link
                to="/contact"
                className={active === "contact" ? "active-link" : "navbar-link"}
                onClick={() => {
                  setActive("contact");
                }}
              >
                <p>Kontakt</p>
              </Link>
            </div>
          ) : null}
          <BiAlignRight
            className="navbarIcon"
            onClick={() => setShowLinks(!showLinks)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
