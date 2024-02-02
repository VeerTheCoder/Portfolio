import React, { useEffect } from "react";
import "./Skill.css";
import Sdata from "./SkillData";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "./Heading";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container" data-aos="fade-up">
      <Heading heading={'Skills'} />
      <div className="mainskills">
        {Sdata.map((skill) => {
          return (
            <div className="skills" data-aos="fade-up">
              <img src={skill.img} />
              <div>
                <h2>{skill.heading}</h2>
                <p>{skill.subheading}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
