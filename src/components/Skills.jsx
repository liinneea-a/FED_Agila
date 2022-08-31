import Headliner from './Headliner'
import { skills } from '../data'
import { useState } from 'react'

const Skills = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="section">
      <Headliner
        title="Tech Stack"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus "
      />
      <div className="skill-grid">
        <div className="skill-grid-item" onClick={() => setOpen(!open)}>
          <h3>html</h3>
          <p className={open ? 'show' : 'hide'}>description</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
