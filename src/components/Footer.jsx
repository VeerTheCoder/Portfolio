import React from "react";
import "./Footer.css";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'

const Footer = () => {
  return (
    <>
      {/* <footer>
      <div className="detail">
        <h2>Portfolio</h2>
        <p>	&copy; 2023 Protfolio - @veer67167@gmail.com</p>
      </div>
    </footer> */}
      <footer id="contact" className="fcontainer">
        <div className="text">
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className="links">
          <li className="link">
            <IoMdMail className="ficn"/>
            <a href="mailto:veer67167@email.com">veer67167@email.com</a>
          </li>
          <li className="link">
            <FaLinkedin className="ficn"/>
            <a
              href="https://www.linkedin.com/in/virendra-pratap-singh-94713a20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank">
              linkedin.com/Veer
            </a>
          </li>
          <li className="link">
            <FaGithub className="ficn"/>
            <a href="https://github.com/VeerTheCoder" target="_blank">
              github.com/VeerTheCoder
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
