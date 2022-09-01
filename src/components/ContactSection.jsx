import React from 'react'
import mapImg from '../assets/images/map.jpg'
import ContactForm from './ContactForm'
import Headliner from './Headliner'

const ContactSection = () => {
  return (
    <div className="section" id="contact">
      <Headliner
        title="Get In Touch"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus "
      />
      <ContactForm/>
      <div>
        <img src={mapImg} alt="a map showing location of company" />
      </div>
    </div>
  )
}

export default ContactSection
