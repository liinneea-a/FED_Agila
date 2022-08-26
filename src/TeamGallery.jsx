import {team, skills} from './data'
import TeamCard from './TeamCard'

function TeamGallery() {

  return (
    <div className="section-container">
     <h2>The Team</h2>
     <ul className="team-gallery">
        <TeamCard props={team}/>
     </ul>
    </div>
  )
}

export default TeamGallery
