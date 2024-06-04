import Table from "react-bootstrap/Table";
import "./Projects.scss";

const Projects = () => {
  const projectsData = [
    {
      title: "StudyBoost",
      description:
        "A comprehensive full-stack application designed for users to schedule and manage meetings by creating appointments. Developed with React for the frontend, and Node.js with MongoDB for the backend.",
      link: "https://github.com/Rodrigo-Patron/StudyBoost",
    },
    {
      title: "Blog",
      description:
        "A dynamic blog platform enabling users to create posts, add comments, like posts, and track visitor counts. Built with a robust tech stack including Java, Spring Boot, Angular, TypeScript, and MySQL.",
      link: "https://github.com/Rodrigo-Patron/Blog-App",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A backend-focused project simulating an e-commerce environment, featuring user registration, product creation, and cart management. Implemented using Node.js, Express, and MongoDB.",
      link: "https://github.com/Rodrigo-Patron/E-Commerce-Platform",
    },
    {
      title: "Weather Forecast",
      description:
        "A practical application providing current temperature information based on city search. Constructed with React, Node.js, Express, and integrated with an external weather API.",
      link: "https://github.com/Rodrigo-Patron/Weather-App",
    },
    {
      title: "Medical Records",
      description:
        "A user-friendly application for registering, logging in, and visualizing medical data through graphical representations. Developed exclusively with React, utilizing local storage for data persistence.",
      link: "https://github.com/Rodrigo-Patron/Medical-Record-Project",
    },
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="card-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h2>{project.title}</h2>
              <p className="click-text">Click to see code</p>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
