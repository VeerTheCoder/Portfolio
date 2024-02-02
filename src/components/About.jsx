import React, { useEffect } from "react";
import "./About.css";
import Skill from "./Skill";
import about from "../assets/portimg.png";
import Hob from "./Hob";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import Heading from "./Heading";
import Resume from "../assets/VeerResumefl.pdf";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about">
      <div className="intro" data-aos="fade-down">
        <h3>Hello I'm </h3>
        <span>VIRENDRA PRATAP SINGH</span>
        <p>Web Developer</p>
        <Icons />
        <div className="btn">
          <a href={Resume} download={"Veer_Resume"}>
            <button className="btns1">Download Resume</button>
          </a>
          <Link to={"/contact"}>
            {" "}
            <button>Hire Me</button>
          </Link>
        </div>
        <div className="aimg">
          <img src={about} alt="My image" data-aos="fade-up" />
        </div>
      </div>

      <div className="education" data-aos="fade-up">
        <Heading heading={"Education"} />
        <div className="degrees">
          <ul>
            <li>
              <p>
                Master of Computer Application <span>(2022-2024)</span>
              </p>
            </li>
          </ul>
          <span>Galgotias University, Greater Noida </span>

          <ul>
            <li>
              <p>
                Bachelor of Computer Applications <span>(2018-2021)</span>
              </p>
            </li>
          </ul>
          <span>Raj Narain College, Hajipur, Vaishali</span>

          <ul>
            <li>
              <p>
                Intermediate <span>(2014-2016)</span>
              </p>
            </li>
          </ul>
          <span>S M Inter College, Hajipur, Vaishali</span>

          <ul>
            <li>
              <p>
                Matriculation <span>(2013-2014)</span>
              </p>
            </li>
          </ul>
          <span>Sahyogi High School, Hajipur, Vaishali</span>
        </div>
      </div>
      <Skill />
      <Hob />
    </div>
  );
};

export default About;
