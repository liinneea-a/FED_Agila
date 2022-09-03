import Headliner from './Headliner'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className="section">
      <Headliner
        title="Tech Stack"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus "
      />
      <ul className="skill-grid">
        <SkillCard />
      </ul>
    </div>
  )
}

export default Skills
