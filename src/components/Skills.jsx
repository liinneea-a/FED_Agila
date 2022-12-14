import Headliner from './Headliner'
import SkillCard from './SkillCard'
import { LayoutGroup } from 'framer-motion'

const Skills = () => {
  return (
    <div className="section" id="skills">
      <Headliner
        title="Tech Stack"
        text="With a keen eye on technologies, we continuously add to our tech-stack to fit your needs."
      />
      <ul className="skill-grid">
        <LayoutGroup>
          <SkillCard />
        </LayoutGroup>
      </ul>
    </div>
  )
}

export default Skills
