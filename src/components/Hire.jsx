import React, { useEffect } from "react";
import "./Hire.css";
import simage from "../assets/Veer.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "./Heading";

const Hire = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="hire" data-aos="fade-up">
      <Heading heading={"why me ?"} />
      <div className="hcontent" data-aos="fade-up">
        <p>
          I'd like to share with you the reasons why you should consider working
          with me or exploring opportunities together. In a world filled with
          talent and potential collaborators, you might be wondering, "Why me?"
          Here's why:
          <br />
          <span>1. </span>
          I never stop to improve myself, never give up for hard work and try my
          best.
          <br />
          <span>2. </span>
          I love to take responsibility and I like challenges. <br />
          <span>3. </span>I need the right opportunity and you are the response.
          <br />
          <span>4. </span>
          I bring my unique perspective, personality, and creativity to every
          project.
          <br />
          <span>5. </span>I am deeply passionate about what I do.
        </p>
      </div>
      <div className="image">
        <img src={simage} />
      </div>
    </div>
  );
};

export default Hire;
