import Headliner from "./components/Headliner";
import { team, skills } from "./data";
import TeamCard from "./TeamCard";

function TeamGallery() {
  return (
    <div className="section" id="team">
      <Headliner
        title="The Team"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus "
      />
      <ul className="team-gallery">
        <TeamCard props={team} />
      </ul>
    </div>
  );
}

export default TeamGallery;
