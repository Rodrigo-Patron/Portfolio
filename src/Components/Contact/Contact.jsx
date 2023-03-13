import "./Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact me</h2>
      <div className="icon-media">
        <a href="https://github.com/Rodrigo-Patron" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigo-patr%C3%B3n-073375170/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
      <form action="https://formspree.io/f/xayknabe" method="POST">
        <div className="input-name-email">
          <input
            type="text"
            id="name"
            minlength="2"
            placeholder="Fullname"
            required
          />
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
