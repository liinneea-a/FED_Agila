import React from 'react'
import mapImg from '../assets/images/map.jpg'
import ContactForm from './ContactForm'
import Headliner from './Headliner'

const ContactSection = () => {
  return (
    <div className="section">
      <Headliner
        title="Get In Touch"
        text="For all enquiries, please email us using the form below."
      />
      <ContactForm/>
      <div>
        <img src={mapImg} alt="a map showing location of company" />
      </div>
    </div>
  )
}

export default ContactSection
