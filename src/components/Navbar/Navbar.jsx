import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../../assets/Images/logo2.png';
import "./Navbar.css";

const Navbar = () => {
  const [showMobileNav, setMobileNav] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-wrapper left">
            <a href="/" className="navbar-logo">
              {/* <span>
                <p className="logoText caps font-family-inherit font-size-inherit">
                  Bizkompas
                </p>
              </span> */}
              <img src={Logo} alt="logo"/>
            </a>
          </div>
          <div className="links-wrapper right">
          <Link
             to="main-services"
             smooth
             spy
             activeClass='active-link'
             className="navbar-link"
             offset={-160}
            >
              <p>Usluge</p>
            </Link>
            <Link
              to="lower-content"
              smooth
              spy
              activeClass='active-link'
              className="navbar-link"
              offset={-200}
            >
              <p>Biznis podrška</p>
            </Link>
            <Link
              to="about-us"
              smooth
              spy
              activeClass='active-link'
              className="navbar-link"
              offset={-20}
            >
              <p>O nama</p>
            </Link>
          </div>
          {showMobileNav ? (
            <div className="links-wrapper-mobile right">
              <Link
             to="main-services"
             smooth
             spy
             activeClass='active-link'
             className="navbar-link"
             offset={-160}
             onClick={() => {
              setMobileNav(false);
            }}
            >
              <p>Usluge</p>
            </Link>
            <Link
              to="lower-content"
              smooth
              spy
              activeClass='active-link'
              className="navbar-link"
              offset={-215}
              onClick={() => {
              
                setMobileNav(false);
              }}
            >
              <p>Biznis podrška</p>
            </Link>
            <Link
              to="about-us"
              smooth
              spy
              activeClass='active-link'
              className="navbar-link"
              offset={-20}
              onClick={() => {
            
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
