import React, { useEffect, useRef } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import contact from "../assets/contact-img.png";
import Heading from "./Heading";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8k4et52",
        "template_hkkzoqv",
        form.current,
        "CIzX1vDlHf78mfluE"
      )
      .then(
        (result) => {
          alert("Message Send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" data-aos="fade-up">
      <Heading heading={"Get in Touch"} />
      <div className="contact_detail">
        <div className="cimage">
          <img src={contact} alt="contact" />
        </div>
        <div className="form_control">

          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required autoComplete="on"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required autoComplete="on"/>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="8" required autoComplete="off"/>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
