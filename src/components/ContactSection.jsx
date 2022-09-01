import React from "react";
import mapImg from "../assets/images/map.jpg";
import ContactForm from "./ContactForm";
import Directions from "./Directions";
import Headliner from "./Headliner";
import Map from "./Map";

const ContactSection = () => {
  return (
    <div className="section">
      <Headliner
        title="Get In Touch"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus "
      />
      <ContactForm />
      <Map />
      <Directions />
    </div>
  );
};

export default ContactSection;
