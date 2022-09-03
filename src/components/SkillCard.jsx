import { skills } from '../data'
import { useState } from 'react'
import { motion } from 'framer-motion'

const SkillCard = () => {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      {skills.map((skill) => (
        <motion.li
          key={skill.name}
          className="skill-grid-item"
          onClick={() => setisOpen(!isOpen)}
        >
          <motion.img src={skill.image} alt="logo" />
          <motion.h3>{skill.name}</motion.h3>
          {isOpen && <motion.p>{skill.description}</motion.p>}
        </motion.li>
      ))}
    </>
  )
}

export default SkillCard
