import Headliner from "./components/Headliner";
import { team, skills } from "./data";
import TeamCard from "./TeamCard";

function TeamGallery() {
  return (
    <div className="section" id="team">
      <Headliner
        title="The Team"
        text="Down below you'll find our amazing team of Creative Pointers!"
      />
      <ul className="team-gallery">
        <TeamCard props={team} />
      </ul>
    </div>
  );
}

export default TeamGallery;
