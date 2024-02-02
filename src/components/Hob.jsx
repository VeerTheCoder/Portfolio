import React, { useEffect } from "react";
import "./Hob.css";
import hdata from "./Hobdata";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "./Heading";

const Hob = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="hob">
      <Heading heading={'More About Me'}/>
      {hdata.map((hobs) => {
        return (
          <div className="hobcontent" data-aos="fade-up">
            <img src={hobs.himg} />

            <div className="hcons">
              <h2>{hobs.heading}</h2>
              <p>{hobs.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hob;
