import { team } from "./data";

function TeamCard() {
  return (
    <>
      {team &&
        team.map((team) => (
          <li
            className="grid-item"
            key={team.id}
            onClick={() => <link to="`/team/${team.slug}`" />}
          >
            <img src={team.image}/>
            <h2 className="team-card-name">
              {team.firstname}{' '}
              {team.lastname}
            </h2>
            <h3 className="team-card-role">{team.role}</h3>
          </li>
        ))}
    </>
  );
}

export default TeamCard;
