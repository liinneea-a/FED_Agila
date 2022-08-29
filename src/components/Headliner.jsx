import React from 'react'

const Headliner = ({ title, text }) => {
  return (
    <div className="headliner">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Headliner
