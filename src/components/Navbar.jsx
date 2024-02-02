import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export default function NavBar() {
  const [isMobile, setiSMobile] = useState(false);
  return (
    <header className="navbar">
      <div className="containerNav">
        <div className="logoName">
          <h3>
            <span>V</span>EER
          </h3>
        </div>
        <ul className={isMobile ? "navul navul-mobile" : "navul"}>
          <li
            className="navli"
            onClick={() => {
              setiSMobile(false);
            }}>
            <Link to="/">Home</Link>
          </li>
          <li
            className="navli"
            onClick={() => {
              setiSMobile(false);
            }}>
            <Link to="/project">Project</Link>
          </li>
          <li
            className="navli"
            onClick={() => {
              setiSMobile(false);
            }}>
            <Link to="/about">About</Link>
          </li>
          <li
            className="navli"
            onClick={() => {
              setiSMobile(false);
            }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className="trigger" onClick={() => setiSMobile(!isMobile)}>
          {isMobile ? <div className="close"><GrClose /></div> : <div className="ham"> <GiHamburgerMenu /></div>}
        </button>
      </div>
    </header>
  );
}
