import Table from "react-bootstrap/Table";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h2>My projects</h2>

      <Table striped>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://github.com/Rodrigo-Patron/StudyBoost"
                target="_blank"
              >
                StudyBoost
              </a>
            </td>
            <td>
              Fullstack project that allows users to schedule meetings by
              creating appointments. Made with React in Frontend and Node.js and
              MongoDB in Backend.{" "}
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://github.com/Rodrigo-Patron/E-Commerce-Platform"
                target="_blank"
              >
                E-Commerce Platform
              </a>
            </td>
            <td>
              Backend project simulating an E-commerce Platform, allowing to
              register a user, create products and add them to the cart. Made
              with Node.js, Express and MongoDB.
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://github.com/Rodrigo-Patron/Weather-App"
                target="_blank"
              >
                Weather App
              </a>
            </td>
            <td>
              This project shows the actual temperature searching by city. Made
              with React, Express and an API.
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://github.com/Rodrigo-Patron/Medical-Record-Project"
                target="_blank"
              >
                Medical Records App
              </a>
            </td>
            <td>
              This project allows you to register and login, also to enter and
              display data. Made only with React saving data in local storage.{" "}
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://github.com/Rodrigo-Patron/Engine-Game"
                target="_blank"
              >
                Engine Game
              </a>
            </td>
            <td>
              Simple game that imitates an engine, allowing to turn on, turn
              off, speed up, change gear and so on. Made with React.
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Projects;
