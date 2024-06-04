import "./Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hym79e5', 'template_p1wu1es', form.current, {
        publicKey: 'wD24yvfjuy_O8dim2',
      })
      .then(
        () => {
          console.log('Message sent!');
          alert("Message has been sent!")
        },
        (error) => {
          console.log('Message failed', error.text);
        },
      );
  };



  return (
    <div className="contact" id="contact">
      <h1>Contact me</h1>
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
      <form >
      {/* <form ref={form} onSubmit={sendEmail}> */}
        <div className="input-name-email">
          <input
            type="text"
            name="user_name"
            id="name"
            minlength="2"
            placeholder="Name"
            required
          />
          <input type="email" name="user_email" id="email" placeholder="Email" required />
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
