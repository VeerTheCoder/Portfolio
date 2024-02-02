import React, { useEffect } from 'react'
import './Heading.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = ({heading}) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className='heading' data-aos="fade-up">
        <h1>{heading}</h1>
    </div>
  )
}

export default Heading