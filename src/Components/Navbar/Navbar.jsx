import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../../assets/Images/logo2.png';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [showMobileNav, setMobileNav] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-wrapper left">
            <Link to="/" className="navbar-logo" onClick={() => setActive("")}>
              {/* <span>
                <p className="logoText caps font-family-inherit font-size-inherit">
                  Bizkompas
                </p>
              </span> */}
              <img src={Logo} alt="logo"/>
            </Link>
          </div>
          <div className="links-wrapper right">
            {/* <Link
              to="/services"
              className={active === "services" ? "active-link" : "navbar-link"}
              onClick={() => {
                setActive("services");
              }}
            >
              <p>Usluge</p>
            </Link> */}
            {/* <Link
              to="/news"
              className={active === "contact" ? "active-link" : "navbar-link"}
              onClick={() => {
                setActive("contact");
              }}
            >
              <p>Knjigovodstvene usluge</p>
            </Link> */}
            {/* <Link
              to="/usefulLinks"
              className={
                active === "usefulLinks" ? "active-link" : "navbar-link"
              }
              onClick={() => {
                setActive("usefulLinks");
              }}
            >
              <p>Korisni linkovi</p>
            </Link> */}
            <Link
              to="/aboutUs"
              className={active === "aboutUs" ? "active-link" : "navbar-link"}
              onClick={() => {
                setActive("aboutUs");
              }}
            >
              <p>O nama</p>
            </Link>
          </div>
          {showMobileNav ? (
            <div className="links-wrapper-mobile right">
              {/* <Link
                to="/services"
                className={
                  active === "services" ? "active-link" : "navbar-link"
                }
                onClick={() => {
                  setActive("services");
                  setMobileNav(false);
                }}
              >
                <p>Usluge</p>
              </Link> */}
              {/* <Link
                to="/news"
                className={active === "contact" ? "active-link" : "navbar-link"}
                onClick={() => {
                  setActive("contact");
                  setMobileNav(false);
                }}
              >
                <p>Knjigovodstvene usluge</p>
              </Link> */}
              {/* <Link
                to="/usefulLinks"
                className={
                  active === "usefulLinks" ? "active-link" : "navbar-link"
                }
                onClick={() => {
                  setActive("usefulLinks");
                }}
              >
                <p>Korisni linkovi</p>
              </Link> */}
              <Link
                to="/aboutUs"
                className={active === "aboutUs" ? "active-link" : "navbar-link"}
                onClick={() => {
                  setActive("aboutUs");
                  setMobileNav(false);
                }}
              >
                <p>O nama</p>
              </Link>
            </div>
          ) : null}
          {showMobileNav ? (
            <AiOutlineClose
              className="burgerIcon"
              onClick={() => setMobileNav(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="burgerIcon"
              onClick={() => setMobileNav(true)}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
