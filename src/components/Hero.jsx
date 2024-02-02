import "./Hero.css";
import React, { useEffect } from "react";
import hero from "../assets/portimg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import Resume from "../assets/VeerResumefl.pdf";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero">
      <div className="himage">
        <img src={hero} />
      </div>
      <div className="content">
        <p>
          Hello, <span>I'm </span>
        </p>
        <h2>
          <span>VIRENDRA PRATAP SINGH</span>
        </h2>
        <p>Full Stack developer</p>

        <div className="btns">
          <a href={Resume} download={"Veer_Resume"}>
            <button className="btn1">Resume</button>
          </a>
          <Link to={"/contact"}>
            <button className="btn2">Let's Talk</button>
          </Link>
        </div>
        <Icons />
      </div>
    </div>
  );
};

export default Hero;
