import { Link, useParams } from 'react-router-dom';
import { team } from './data';

export default function ProfilePage() {
  let { id } = useParams();
  let person;

  for (let member of team) {
    if (member.firstname === id) {
      person = member;
    }
  }

  return (
    <>
      <Link to="/">
        <button className="contact-form startpageBtn">Back to startpage</button>
      </Link>
      <div className="profilePageContainer">
        <div className="sidebar">
          <div className="imgContainer">
            <img src={person.image} />
          </div>
          <div className="l-hidden">
            <div className="headline">
              <h2 className="name">
                {person.firstname} {person.lastname}
              </h2>
              <p>{person.role}</p>
            </div>
          </div>

          <div className="aboutMeContainer">
            <p className="team-card-name profilePageHeadline">ABOUT ME</p>
            <p>{person.presentation}</p>
          </div>
          <div>
            <p className="team-card-name">CONTACT</p>
            <p>
              {person.contact.email} <br /> 070 1234567
            </p>
          </div>
        </div>

        <div className="profileInfo">
          <div className="headline l-show">
            <h2 className="name ">
              {person.firstname} {person.lastname}
            </h2>
            <p>{person.role}</p>
          </div>

          <div className="container">
            <p className="team-card-name">WORK EXPERIENCE</p>
            <hr />
            <div>
              <span className="fatText">{person.role},</span>
              <span> Företag</span>
            </div>
            <ul className="listStyle">
              <li>
                Sed consequatur quis ut maiores dicta ut delectus dolores.
              </li>
              <li>
                Eum eius deserunt est praesentium suscipit sed neque obcaecati
                eos minus consequatur sit eveniet corporis vel voluptatum
                pariatur. Id deserunt fuga nam neque sint eos rerum ipsam.
              </li>
            </ul>
          </div>
          <div className="container">
            <p className="team-card-name">SKILLS</p>
            <hr />
            <div className="skillsContainer">
              {person.skills.map((skill) => {
                return (
                  <img
                    className="skillsImg"
                    src={skill}
                    key={skill}
                    width=""
                    height="30px"
                  />
                );
              })}
            </div>
          </div>
          <div className="container">
            <p className="team-card-name">EDUCATION</p>
            <hr />
            <p>
              Medieinstitutet, <span>{person.role}</span>
              <br />
              <span>September 2021 - Maj 2023</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
