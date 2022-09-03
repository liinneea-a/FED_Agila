import { skills } from '../data'
import { useState } from 'react'
import { motion } from 'framer-motion'

const SkillCard = () => {
  const [isOpen, setisOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const handleClick = (e) => {
    setSelected(e.target)
    setisOpen(!isOpen)
    console.log(selected)
  }

  return (
    <>
      {skills.map((skill) => (
        <motion.li
          transition={{ layout: { duration: 0.5 } }}
          layout
          key={skill.name}
          className={
            selected === skill.name
              ? 'skill-grid-item expand'
              : 'skill-grid-item'
          }
          onClick={() => setSelected(skill.name)}
          style={{ borderRadius: '5px' }}
        >
          <motion.div layout="position">
            <motion.img layout="position" src={skill.image} alt="logo" />
            <motion.h3 layout>{skill.name}</motion.h3>
          </motion.div>
          {selected === skill.name && (
            <motion.p
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layout
            >
              {skill.description}
            </motion.p>
          )}
        </motion.li>
      ))}
    </>
  )
}

export default SkillCard
