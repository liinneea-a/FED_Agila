export default function ProfilePage() {
  return (
    <div className="profilePageContainer">

      <div className="sidebar">
        <div className="imgContainer"></div>
        <div className="aboutMeContainer">
          <p className="team-card-name profilePageHeadline">ABOUT ME</p>
          <p>
            I'm 25 years old and currently living in Gothenburg, Sweden. I am
            passionate about creating and finding new cool ways to do so. For a
            long time, my base has been on stage or in front of a camera, acting
            and singing (I'm a huge fan of musicals). But have been doing that
            for a few years I wanted to try something new.
          </p>
        </div>
        <div className="contactTextContainer">
          <p className="team-card-name">CONTACT</p>
          <p>mail@mail.com <br/> 070 1234567</p>
        </div>
      </div>
      
      <div className="profileInfo">
        <h2>LINNEA ALBERTSSON</h2>
        <p>Front-end Developer</p>
        <div className="workExperience">
            <p>WORK EXPERIENCE</p>
            <hr/>
        </div>

      </div>

    </div>
  );
}
