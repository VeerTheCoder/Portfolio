import React from "react";
import {FaInstagram, FaGithub, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import './Icons.css'

const Icons = () => {
  return (
    <div className="icons">
      <a href="https://instagram.com/manny_singh_2.o?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank"><FaInstagram className="insta icn" /></a>
      <a href="https://github.com/VeerTheCoder" target="_blank"> <FaGithub className="git icn" /></a>
      <a href="https://www.linkedin.com/in/virendra-pratap-singh-94713a20a" target="_blank"><FaLinkedin className="linked icn" /></a>
      <a href="https://www.facebook.com/raj.manny.1?mibextid=ZbWKwL" target="_blank"> <FaFacebookSquare className="fb icn" /></a>
    </div>
  );
};

export default Icons;
