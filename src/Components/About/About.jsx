import "./About.scss";

const About = () => {
  return (
    <div className="AboutMe">
      <h2>About me</h2>

      <div className="item-container">
        <h3>Who am I?</h3>
        <div className="line"></div>
        <p className="item item-2">
          I am a mexican guy living in Germany. A committed and professional
          International Relations graduate who has the experience, skills and
          qualifications to support and develop products and services.
        </p>

        <h3>Why development?</h3>
        <div className="line"></div>
        <p>
          I decided to pursue a career switch as Full-Stack Developer because I
          enjoy coming up with ideas for software projects for any challenges I
          face in my daily and work life. And of course, I enjoy problem
          solving.
        </p>

        <h3>My interests</h3>
        <div className="line"></div>
        <p>
          Full-Stack Development. Learning new things. Meeting people from all
          over the world and getting to know and experience different cultures
        </p>

        <h3>Languages</h3>
        <div className="line"></div>
        <p>
          I am able to speak spanish, english and german. Languages open many
          doors!
        </p>
      </div>
    </div>
  );
};

export default About;
