import React from 'react'

export const Headliner = ({ title, text }) => {
  return (
    <div className="headliner">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
