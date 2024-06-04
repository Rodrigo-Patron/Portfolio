import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-bar">
       <div className="portfolio">
          <p className="port">Portfolio</p><p className="dot">.</p>
        </div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
