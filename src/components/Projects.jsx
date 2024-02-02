import React, { useEffect } from "react";
import "./Projects.css";
import data from "./ProjectData";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "./Heading";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="proj">
      <Heading heading={'My Projects'}/>
      {data.map((pdata) => {
        return (
          <div className="main" data-aos="fade-up">
            <div className="maincontent">
              <span>{pdata.subtitle}</span>
              <h2>{pdata.title}</h2>
              <p>{pdata.description}</p>
              <button ><a href={pdata.link} target="_blank">See Project</a></button>
            </div>
            <div className="mimage">
              <img src={pdata.pimg} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
