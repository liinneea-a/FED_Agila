import React from 'react'
import mapImg from '../assets/images/map.jpg'
import Headliner from './Headliner'

const ContactSection = () => {
  return (
    <div className="section">
      <Headliner
        title="Get In Touch"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus "
      />
      <div>form here</div>
      <div>
        <img src={mapImg} alt="a map showing location of company" />
      </div>
    </div>
  )
}

export default ContactSection
