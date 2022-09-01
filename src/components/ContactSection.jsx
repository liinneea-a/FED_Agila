import React from "react";
import mapImg from "../assets/images/map.jpg";
import ContactForm from "./ContactForm";
import Headliner from "./Headliner";
import Directions from "./Directions";
import Map from "./Map";

const ContactSection = () => {
  return (
    <div className="section" id="contact">
      <Headliner
        title="Get In Touch"
        text="Find your way to our cozy headquarters for a fresh brew of coffee, or contact us through our message-form below."
      />
      <ContactForm />
      <Map />
      <Directions />
    </div>
  );
};

export default ContactSection;
