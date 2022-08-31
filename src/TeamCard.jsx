import { team } from './data';
import { Link } from 'react-router-dom';

function TeamCard() {
  return (
    <>
      {team &&
        team.map((team) => (
          <Link to={`/profile/${team.firstname}`}>
            <li className="grid-item" key={team.firstname}>
              <img src={team.image} />
              <h2 className="team-card-name">
                {team.firstname} {team.lastname}
              </h2>
              <h3 className="team-card-role">{team.role}</h3>
            </li>
          </Link>
        ))}
    </>
  );
}

export default TeamCard;
